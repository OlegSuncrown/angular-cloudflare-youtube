export async function onRequestPost(context: any) {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context;

  const { AIRTABLE_URL, AIRTABLE_BASE_ID, AIRTABLE_SECRET_KEY } = env;
  const url = `${AIRTABLE_URL}/${AIRTABLE_BASE_ID}/Table%201`;

  const body = await request.json();

  try {
    const airTableResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AIRTABLE_SECRET_KEY}`,
      },
      body: JSON.stringify(body),
    });

    const response = await airTableResponse.json();
    const payload = JSON.stringify(response, null, 2);

    return new Response(payload, {
      status: 200,
    });
  } catch {
    return new Response('Some error', {
      status: 500,
    });
  }
}
