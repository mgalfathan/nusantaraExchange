import { getRecommendationResults } from "../../src/lib/travelData.js";

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
      "Cache-Control": "public, max-age=120",
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
  const interests = (url.searchParams.get("interests") || "")
    .split(",")
    .map((interest) => interest.trim())
    .filter(Boolean);
  const pace = url.searchParams.get("pace") || "any";
  const budget = url.searchParams.get("budget") || "any";
  const data = getRecommendationResults({ interests, pace, budget });

  return json({
    mode: "connected",
    preferences: { interests, pace, budget },
    data
  });
}
