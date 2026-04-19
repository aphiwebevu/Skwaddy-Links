const IOS_URL = "https://apps.apple.com/za/app/skwaddy/id6759284165";
const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.skwaddy.app";

const DESKTOP_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Download Skwaddy</title>
  <meta name="robots" content="noindex">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      min-height: 100dvh;
      background: linear-gradient(160deg, #f5f0ff 0%, #e8d8ff 100%);
      display: flex; align-items: center; justify-content: center;
      padding: 24px 20px;
    }
    .card {
      background: #fff; border-radius: 28px; padding: 44px 32px 36px;
      max-width: 380px; width: 100%; text-align: center;
      box-shadow: 0 8px 48px rgba(122,75,224,0.13);
    }
    .logo { font-size: 15px; font-weight: 700; color: #7A4BE0; letter-spacing: 0.04em; text-transform: uppercase; margin-bottom: 20px; }
    h1 { font-size: 22px; font-weight: 800; color: #1a1030; line-height: 1.35; margin-bottom: 10px; }
    p { font-size: 15px; color: #6F6F8F; line-height: 1.6; margin-bottom: 28px; }
    .store-btn {
      display: flex; align-items: center; justify-content: center; gap: 10px;
      width: 100%; padding: 15px 20px; border-radius: 16px;
      font-size: 15px; font-weight: 700; text-decoration: none;
      margin-bottom: 12px; transition: transform 0.12s ease;
    }
    .store-btn:last-child { margin-bottom: 0; }
    .store-btn:active { transform: scale(0.97); }
    .ios-btn { background: #000; color: #fff; box-shadow: 0 4px 16px rgba(0,0,0,0.18); }
    .android-btn { background: #01875f; color: #fff; box-shadow: 0 4px 16px rgba(1,135,95,0.22); }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">Skwaddy</div>
    <h1>Download Skwaddy</h1>
    <p>Skwaddy helps families connect and plan playdates and parties together.</p>
    <a href="${IOS_URL}" class="store-btn ios-btn">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
      Download on the App Store
    </a>
    <a href="${ANDROID_URL}" class="store-btn android-btn">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M3.18 23.76c.35.2.75.22 1.12.04l12.02-6.93-2.54-2.54-10.6 9.43zM.5 2.4C.18 2.78 0 3.33 0 4.03v15.94c0 .7.18 1.25.51 1.63l.09.08 8.93-8.93v-.2L.59 2.33l-.09.07zM20.96 10.34l-2.43-1.4-2.84 2.84 2.84 2.84 2.45-1.41c.7-.4.7-1.06-.02-1.87zM4.3.24L16.32 7.17l-2.54 2.54L3.18.28C3.55.1 3.95.12 4.3.24z"/></svg>
      Get it on Google Play
    </a>
  </div>
</body>
</html>`;

export async function onRequest(context) {
  const ua = context.request.headers.get("User-Agent") || "";

  if (/iphone|ipad|ipod/i.test(ua)) {
    return Response.redirect(IOS_URL, 302);
  }
  if (/android/i.test(ua)) {
    return Response.redirect(ANDROID_URL, 302);
  }

  return new Response(DESKTOP_HTML, {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
  });
}
