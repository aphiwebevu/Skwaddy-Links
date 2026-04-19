const IOS_URL = "https://apps.apple.com/za/app/skwaddy/id6759284165";
const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.skwaddy.app";

export async function onRequest(context) {
  const ua = context.request.headers.get("User-Agent") || "";

  // If the app were installed, iOS/Android would intercept the universal link
  // before this function runs. Reaching here means the app is not installed.
  if (/iphone|ipad|ipod/i.test(ua)) {
    return Response.redirect(IOS_URL, 302);
  }
  if (/android/i.test(ua)) {
    return Response.redirect(ANDROID_URL, 302);
  }

  // Desktop — redirect to the download page with both store buttons
  return Response.redirect("https://links.skwaddy.com/download", 302);
}
