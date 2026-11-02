import type { APIContext } from "astro";

// Server-only endpoint: forwards enquiry form submissions to Brevo.
// BREVO_API_KEY must be set in .env (not PUBLIC_ — it stays server-side).
// Brevo contact attribute names (FIRSTNAME, COMPANY, ...) must exist in
// your Brevo account under Contacts > Manage attributes, or Brevo rejects them.
export async function POST({ request }: APIContext) {
  const apiKey = import.meta.env.BREVO_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Brevo is not configured" }, { status: 500 });
  }

  let payload: Record<string, string>;
  try {
    payload = (await request.json()) as Record<string, string>;
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { email, name, company, ...rest } = payload;
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
  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
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

    const result = await response.json().catch(() => ({}));

    created = response.status === 201;
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Brevo request failed" },
      { status: 502 },
    );
  }

  // Notify the site owners by email (best-effort; never blocks the submission).
  // Requires: CONTACT_FROM_EMAIL (a verified Brevo sender).
  // Recipients: CONTACT_NOTIFY_EMAIL (comma-separated), defaults to agung@ and vanezza@.
  const fromEmail = import.meta.env.CONTACT_FROM_EMAIL;
  const notifyEmails = (import.meta.env.CONTACT_NOTIFY_EMAIL ?? "")
    .split(/[,;]\s*/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (notifyEmails.length === 0) {
    notifyEmails.push("agung@kyronengineering.com", "vanezza@kyronengineering.com");
  }
  let emailSent = false;
  if (fromEmail && notifyEmails.length > 0) {
    try {
      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          sender: { name: "Kyron Engineering", email: fromEmail },
          to: notifyEmails.map((email) => ({ email, name: "Kyron Engineering" })),
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
          }),
        }),
      });
      emailSent = true;
    } catch {
      // Email delivery is best-effort; the submission is already recorded in Brevo.
    }
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
}) {
  const esc = (s?: string) =>
    String(s ?? "").replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
    );
  return `
    <h2>New enquiry</h2>
    <table border="0" cellpadding="4" style="border-collapse:collapse;font-family:sans-serif;">
      <tr><td style="font-weight:bold;">Name</td><td>${esc(fields.name)}</td></tr>
      <tr><td style="font-weight:bold;">Email</td><td>${esc(fields.email)}</td></tr>
      <tr><td style="font-weight:bold;">Company</td><td>${esc(fields.company)}</td></tr>
      <tr><td style="font-weight:bold;">Role</td><td>${esc(fields.role)}</td></tr>
      <tr><td style="font-weight:bold;">Country or region</td><td>${esc(fields.region)}</td></tr>
      <tr><td style="font-weight:bold;">Locations or branches</td><td>${esc(fields.locations)}</td></tr>
      <tr><td style="font-weight:bold;">Follow up</td><td>${esc(fields.followUp)}</td></tr>
      <tr><td style="font-weight:bold;">Help with</td><td>${esc(fields.help)}</td></tr>
    </table>
  `;
}
