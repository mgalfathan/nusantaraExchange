import { countryFallback } from "../../src/lib/travelData.js";

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
      "Cache-Control": "public, max-age=3600",
      ...corsHeaders,
      ...(init.headers || {})
    }
  });
}

export function onRequestOptions() {
  return new Response(null, { headers: corsHeaders });
}

export async function onRequestGet({ env }) {
  const serviceUrl = env.COUNTRY_PROFILE_URL;

  if (!serviceUrl) {
    return json({
      mode: "curated",
      data: countryFallback
    });
  }

  try {
    const response = await fetch(serviceUrl, {
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Country profile service returned ${response.status}`);
    }

    const data = await response.json();

    return json({
      mode: "connected",
      data
    });
  } catch (error) {
    return json({
      mode: "curated",
      warning: error.message,
      data: countryFallback
    });
  }
}
