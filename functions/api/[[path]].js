export function onRequest() {
  return new Response(
    JSON.stringify({
      error: "Route not found"
    }),
    {
      status: 404,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store"
      }
    }
  );
}
