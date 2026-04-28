import { getCultureExchangePayload } from "../../src/lib/travelData.js";

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
      "Cache-Control": "public, max-age=300",
      ...corsHeaders,
      ...(init.headers || {})
    }
  });
}

export function onRequestOptions() {
  return new Response(null, { headers: corsHeaders });
}

export async function onRequestGet() {
  return json({
    mode: "connected",
    data: getCultureExchangePayload()
  });
}
