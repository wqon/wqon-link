export const onRequestPost: PagesFunction = async (context) => {
  let body;

  try {
    body = (await context.request.json()) as any;
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const email = body.customer_email;
  const wantsNewsletter = body?.checkboxes?.newsletter === true;

  if (!email) {
    return new Response("Missing email", { status: 400 });
  }

  if (!wantsNewsletter) {
    return new Response("No newsletter opt-in", { status: 200 });
  }

  const apiKey = context.env.OCTOPUS_API;
  const listId = context.env.OCTOPUS_ID;

  const eoRes = await fetch(
    `https://api.emailoctopus.com/lists/${listId}/contacts`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        tags: ["checkout"],
      }),
    },
  );

  return new Response(await eoRes.text(), { status: eoRes.status });
};
