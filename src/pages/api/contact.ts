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

    if (response.ok) {
      return Response.json({ ok: true, created: response.status === 201 });
    }

    return Response.json(
      { error: result.message ?? `Brevo returned ${response.status}` },
      { status: 400 },
    );
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Brevo request failed" },
      { status: 502 },
    );
  }
}
