import { buildRoute, getDestinationById } from "../../src/lib/travelData.js";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function onRequestGet({ request }) {
  const url = new URL(request.url);
  const destinationId = url.searchParams.get("destinationId") || "wae-rebo";
  const origin = url.searchParams.get("origin") || "Jakarta";
  const destination = getDestinationById(destinationId);

  if (!destination) {
    return new Response("Destination not found", { status: 404 });
  }

  const route = buildRoute(destinationId, origin);
  const safeRoute = {
    ...route,
    origin: escapeHtml(route.origin),
    destination: escapeHtml(route.destination),
    gateway: escapeHtml(route.gateway),
    distance: escapeHtml(route.distance),
    estimate: escapeHtml(route.estimate),
    accessNotes: escapeHtml(route.accessNotes),
    modes: route.modes.map(escapeHtml)
  };
  const html = `<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Rute ${safeRoute.destination}</title>
    <style>
      body { margin: 0; font-family: Inter, system-ui, sans-serif; background: #f5f1e8; color: #1f2421; }
      main { max-width: 760px; margin: 0 auto; padding: 32px 20px; }
      article { background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 18px 60px rgba(31, 36, 33, 0.14); }
      h1 { margin: 0 0 8px; font-size: clamp(28px, 6vw, 44px); }
      p { line-height: 1.7; color: rgba(31, 36, 33, 0.72); }
      dl { display: grid; gap: 14px; margin-top: 22px; }
      dt { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .12em; color: #245c4a; }
      dd { margin: 4px 0 0; font-weight: 700; }
      .modes { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
      .modes span { border-radius: 8px; background: #e6ece8; padding: 8px 10px; font-weight: 700; font-size: 14px; }
      a { color: #c7572d; font-weight: 800; }
    </style>
  </head>
  <body>
    <main>
      <article>
        <a href="/">Kembali ke platform</a>
        <h1>Rute ${safeRoute.destination}</h1>
        <p>${safeRoute.accessNotes}</p>
        <dl>
          <div><dt>Berangkat dari</dt><dd>${safeRoute.origin}</dd></div>
          <div><dt>Gerbang utama</dt><dd>${safeRoute.gateway}</dd></div>
          <div><dt>Jarak</dt><dd>${safeRoute.distance}</dd></div>
          <div><dt>Estimasi</dt><dd>${safeRoute.estimate}</dd></div>
          <div><dt>Koordinat tujuan</dt><dd>${route.location.lat}, ${route.location.lng}</dd></div>
          <div><dt>Moda transportasi</dt><dd class="modes">${safeRoute.modes.map((mode) => `<span>${mode}</span>`).join("")}</dd></div>
        </dl>
      </article>
    </main>
  </body>
</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=120"
    }
  });
}
