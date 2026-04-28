import { filterDestinations } from "../../src/lib/travelData.js";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

function json(payload, init = {}) {
  return new Response(JSON.stringify(payload), {
    ...init,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=180",
      ...corsHeaders,
      ...(init.headers || {})
    }
  });
}

export function onRequestOptions() {
  return new Response(null, { headers: corsHeaders });
}

export async function onRequestGet({ request }) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search") || "";
  const category = url.searchParams.get("category") || "all";
  const country = url.searchParams.get("country") || "Indonesia";
  const data = filterDestinations({ search, category, country });

  return json({
    mode: "connected",
    count: data.length,
    filters: { search, category, country },
    data
  });
}
