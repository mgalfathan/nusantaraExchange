import { getDestinationById } from "../../../src/lib/travelData.js";

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

export async function onRequestGet({ params }) {
  const destination = getDestinationById(params.id);

  if (!destination) {
    return json(
      {
        mode: "connected",
        error: "Destination not found"
      },
      { status: 404 }
    );
  }

  return json({
    mode: "connected",
    data: destination
  });
}
