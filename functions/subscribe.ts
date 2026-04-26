export const onRequestPost: PagesFunction = async (context) => {
  try {
    const form = await context.request.formData();

    const email = form.get("email")?.toString();
    const tag = form.get("tag")?.toString() || "form";

    if (!email) {
      return new Response(JSON.stringify({ error: "Missing email" }), {
        status: 400,
      });
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
          tags: {
            [tag]: true,
          },
        }),
      },
    );

    const data = await eoRes.json();

    if (!eoRes.ok) {
      return new Response(JSON.stringify({ error: data }), {
        status: eoRes.status,
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};
