export async function onRequest(context) {
  const url = new URL(context.request.url);
  const target = "https://app.skwaddy.com" + url.pathname + url.search;
  return Response.redirect(target, 302);
}
