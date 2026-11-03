export const prerender = false;

import type { APIContext } from "astro";

// Server-only endpoint: forwards enquiry form submissions to Brevo.
// BREVO_API_KEY must be set in .env (not PUBLIC_ — it stays server-side).
// Brevo contact attribute names (FIRSTNAME, COMPANY, ...) must exist in
// your Brevo account under Contacts > Manage attributes, or Brevo rejects them.
export async function POST({ request }: APIContext) {
  const apiKey = process.env.BREVO_API_KEY ?? import.meta.env.BREVO_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Brevo is not configured" }, { status: 500 });
  }

  let payload: Record<string, string>;
  try {
    payload = (await request.json()) as Record<string, string>;
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { email, name, company, _gotcha, _ts, ...rest } = payload;

  // Anti-bot: honeypot filled or submission time abnormal (< 1.5s or future/stale timestamp)
  const elapsedMs = _ts ? Date.now() - Number(_ts) : 0;
  if (_gotcha || (_ts && (elapsedMs < 1500 || elapsedMs > 86400000))) {
    // Return fake success so automated scrapers don't retry, without calling Brevo
    return Response.json({ ok: true, created: false, emailSent: false });
  }

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return Response.json({ error: "A valid email is required" }, { status: 400 });
  }

  const attributes: Record<string, string> = {};
  if (name) attributes.FIRSTNAME = name;
  if (company) attributes.COMPANY = company;
  for (const [key, value] of Object.entries(rest)) {
    if (value) attributes[key.toUpperCase()] = value;
  }

  let created = false;
  let contactError: string | undefined;
  try {
    let response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        attributes,
        updateEnabled: true,
      }),
    });

    if (!response.ok && Object.keys(attributes).length > 0) {
      // If Brevo rejects because custom attributes are not configured, fallback to FIRSTNAME or email-only
      const fallback = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          email,
          ...(name ? { attributes: { FIRSTNAME: name } } : {}),
          updateEnabled: true,
        }),
      });
      if (fallback.ok) {
        response = fallback;
      }
    }

    if (response.ok) {
      created = response.status === 201 || response.status === 204;
    } else {
      const errData = (await response.json().catch(() => ({}))) as { message?: string };
      contactError = errData.message;
    }
  } catch (error) {
    contactError = error instanceof Error ? error.message : "Brevo contact request failed";
  }

  // Notify the site owners by email (best-effort; never blocks the submission).
  // Requires: CONTACT_FROM_EMAIL (a verified Brevo sender).
  // Recipients: CONTACT_NOTIFY_EMAIL (comma-separated), defaults to agung@ and vanezza@.
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? import.meta.env.CONTACT_FROM_EMAIL;
  const rawNotify = String(process.env.CONTACT_NOTIFY_EMAIL ?? import.meta.env.CONTACT_NOTIFY_EMAIL ?? "");
  const notifyEmails: string[] = rawNotify
    .split(/[,;]\s*/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (notifyEmails.length === 0) {
    notifyEmails.push("agung@kyronengineering.com", "vanezza@kyronengineering.com");
  }
  let emailSent = false;
  let emailError: string | undefined;
  if (fromEmail && notifyEmails.length > 0) {
    try {
      const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          sender: { name: "Kyron Engineering", email: fromEmail },
          to: notifyEmails.map((email) => ({ email, name: "Kyron Engineering" })),
          replyTo: { email, name: name ?? email },
          subject: `New contact form submission from ${name ?? email}`,
          htmlContent: contactEmailHtml({
            name,
            email,
            company,
            role: rest.role,
            region: rest.region,
            locations: rest.locations,
            help: rest.help,
            followUp: rest.follow_up,
            projectType: rest.project_type,
            decisionMaker: rest.decision_maker,
            itContact: rest.it_contact,
          }),
        }),
      });
      emailSent = emailRes.ok;
      if (!emailRes.ok) {
        const errData = (await emailRes.json().catch(() => ({}))) as { message?: string };
        emailError = errData.message;
      }
    } catch (error) {
      emailError = error instanceof Error ? error.message : "Brevo SMTP request failed";
    }
  }

  if (!created && !emailSent) {
    return Response.json(
      { error: emailError ?? contactError ?? "Brevo rejected the request" },
      { status: 502 },
    );
  }

  return Response.json({ ok: true, created, emailSent });

}

function contactEmailHtml(fields: {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  region?: string;
  locations?: string;
  help?: string;
  followUp?: string;
  projectType?: string;
  decisionMaker?: string;
  itContact?: string;
}) {
  const esc = (s?: string) =>
    String(s ?? "").replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
    );

  const detailRows = [
    ["Email", fields.email ? `<a href="mailto:${esc(fields.email)}" style="color: #0042AC; text-decoration: none;">${esc(fields.email)}</a>` : undefined],
    ["Company", fields.company ? esc(fields.company) : undefined],
    ["Role", fields.role ? esc(fields.role) : undefined],
    ["Country or Region", fields.region ? esc(fields.region) : undefined],
    ["Locations / Branches", fields.locations ? esc(fields.locations) : undefined],
    ["Preferred Follow-up", fields.followUp ? esc(fields.followUp) : undefined],
    ["Project Type", fields.projectType ? esc(fields.projectType) : undefined],
    ["Decision Maker", fields.decisionMaker ? esc(fields.decisionMaker) : undefined],
    ["IT Contact", fields.itContact ? esc(fields.itContact) : undefined],
  ].filter(([, val]) => Boolean(val));

  const tableRowsHtml = detailRows
    .map(
      ([label, val]) => `
        <tr>
          <td style="padding: 10px 14px; font-size: 13px; color: #5B6878; font-weight: 500; border-bottom: 1px solid #EEF2F6; width: 36%; vertical-align: top;">
            ${label}
          </td>
          <td style="padding: 10px 14px; font-size: 13px; color: #0F2A4A; font-weight: 600; border-bottom: 1px solid #EEF2F6; vertical-align: top;">
            ${val}
          </td>
        </tr>`
    )
    .join("");

  const helpBlock = fields.help
    ? `
      <div style="margin: 20px 0; padding: 14px 16px; background-color: #F8FAFC; border-left: 3px solid #0042AC; border-radius: 4px;">
        <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #5B6878; margin-bottom: 6px;">
          Enquiry &amp; Scope Needs
        </div>
        <div style="font-size: 14px; line-height: 1.6; color: #0F2A4A; white-space: pre-wrap;">${esc(fields.help)}</div>
      </div>`
    : "";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New enquiry</title>
</head>
<body style="margin: 0; padding: 24px 12px; background-color: #F4F6FA; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 580px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(15, 42, 74, 0.04);">
    <!-- Header -->
    <tr>
      <td style="padding: 24px 28px 20px; background-color: #0F2A4A; border-bottom: 2px solid #0042AC;">
        <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #8795A8; margin-bottom: 6px;">
          // INTAKE CONSOLE &middot; KYRON ENGINEERING
        </div>
        <div style="font-size: 20px; font-weight: 700; color: #FFFFFF; line-height: 1.3;">
          New Client Enquiry
        </div>
        <div style="font-size: 13px; color: #CBD5E1; margin-top: 4px;">
          From <strong>${esc(fields.name || "Anonymous")}</strong>${fields.company ? ` &middot; ${esc(fields.company)}` : ""}
        </div>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding: 24px 28px;">
        ${helpBlock}

        <!-- Details Table -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; margin-top: 8px; border: 1px solid #EEF2F6; border-radius: 6px; overflow: hidden;">
          ${tableRowsHtml}
        </table>

        <!-- Quick Reply CTA -->
        ${fields.email ? `
        <div style="margin-top: 24px; text-align: left;">
          <a href="mailto:${esc(fields.email)}?subject=Re:%20Kyron%20Engineering%20Enquiry"
             style="display: inline-block; background-color: #0042AC; color: #FFFFFF; font-size: 13px; font-weight: 600; padding: 10px 18px; border-radius: 6px; text-decoration: none;">
            Reply to ${esc(fields.name || fields.email)} &rarr;
          </a>
        </div>` : ""}
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 16px 28px; background-color: #F8FAFC; border-top: 1px solid #EEF2F6; font-size: 11px; color: #8795A8; line-height: 1.5;">
        Direct founder review &middot; SCBD Jakarta &middot; 24h response SLA
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
