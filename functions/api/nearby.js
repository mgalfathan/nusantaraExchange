import { getDestinationById } from "../../src/lib/travelData.js";

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

function curatedPlaces(destination) {
  return destination.nearbyPoints.map((name, index) => ({
    id: `${destination.id}-nearby-${index}`,
    name,
    kinds: "local point of interest",
    distance: `${(index + 1) * 2} km`
  }));
}

function normalizePlaces(payload, destination) {
  if (Array.isArray(payload)) {
    return payload.map((place, index) => ({
      id: place.id || place.xid || `${destination.id}-nearby-${index}`,
      name: place.name || place.title || "Lokasi sekitar",
      kinds: place.kinds || place.category || "point of interest",
      distance: place.distance ? String(place.distance) : null
    }));
  }

  return (payload.features || [])
    .map((feature, index) => ({
      id: feature.properties?.id || feature.properties?.xid || `${destination.id}-nearby-${index}`,
      name: feature.properties?.name || "Lokasi sekitar",
      kinds: feature.properties?.kinds || feature.properties?.category || "point of interest",
      distance: feature.properties?.dist ? `${Math.round(feature.properties.dist)} m` : null
    }))
    .filter((place) => place.name !== "Lokasi sekitar");
}

export function onRequestOptions() {
  return new Response(null, { headers: corsHeaders });
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const destinationId = url.searchParams.get("destinationId") || "wae-rebo";
  const destination = getDestinationById(destinationId);

  if (!destination) {
    return json(
      {
        mode: "connected",
        error: "Destination not found"
      },
      { status: 404 }
    );
  }

  const lat = Number(url.searchParams.get("lat") || destination.location.lat);
  const lng = Number(url.searchParams.get("lng") || destination.location.lng);
  const radius = Number(url.searchParams.get("radius") || 8000);
  const serviceUrl = env.PLACES_SERVICE_URL;

  if (!serviceUrl) {
    return json({
      mode: "curated",
      data: curatedPlaces(destination)
    });
  }

  try {
    const endpoint = new URL(serviceUrl);
    endpoint.searchParams.set("radius", String(radius));
    endpoint.searchParams.set("lng", String(lng));
    endpoint.searchParams.set("lat", String(lat));
    endpoint.searchParams.set("limit", "8");

    if (env.PLACES_SERVICE_KEY) {
      endpoint.searchParams.set("key", env.PLACES_SERVICE_KEY);
    }

    const response = await fetch(endpoint.toString(), {
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Nearby data service returned ${response.status}`);
    }

    const payload = await response.json();
    const data = normalizePlaces(payload, destination);

    return json({
      mode: "connected",
      data: data.length ? data : curatedPlaces(destination)
    });
  } catch (error) {
    return json({
      mode: "curated",
      warning: error.message,
      data: curatedPlaces(destination)
    });
  }
}
