import {
  buildRoute,
  countryFallback,
  destinations,
  filterDestinations,
  getCultureExchangePayload,
  getDestinationById,
  getRecommendationResults
} from "./travelData";

async function requestJson(path, fallback) {
  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return typeof fallback === "function" ? fallback(error) : fallback;
  }
}

export function fetchDestinations(filters) {
  const params = new URLSearchParams();

  if (filters?.search) params.set("search", filters.search);
  if (filters?.category && filters.category !== "all") params.set("category", filters.category);

  return requestJson(`/api/destinations?${params.toString()}`, {
    mode: "curated",
    data: filterDestinations(filters)
  });
}

export function fetchDestination(id) {
  return requestJson(`/api/destinations/${id}`, {
    mode: "curated",
    data: getDestinationById(id) || destinations[0]
  });
}

export function fetchRecommendations(preferences) {
  const params = new URLSearchParams();

  if (preferences?.interests?.length) params.set("interests", preferences.interests.join(","));
  if (preferences?.pace) params.set("pace", preferences.pace);
  if (preferences?.budget) params.set("budget", preferences.budget);

  return requestJson(`/api/recommendations?${params.toString()}`, {
    mode: "curated",
    data: getRecommendationResults(preferences)
  });
}

export function fetchRoute(destinationId, origin) {
  const params = new URLSearchParams({
    destinationId,
    origin
  });

  return requestJson(`/api/routes?${params.toString()}`, {
    mode: "curated",
    data: buildRoute(destinationId, origin)
  });
}

export function fetchCultureExchange() {
  return requestJson("/api/culture-exchange", {
    mode: "curated",
    data: getCultureExchangePayload()
  });
}

export function fetchCountries() {
  return requestJson("/api/countries", {
    mode: "curated",
    data: countryFallback
  });
}

export function fetchNearbyPlaces(destination) {
  const params = new URLSearchParams({
    lat: destination.location.lat,
    lng: destination.location.lng,
    destinationId: destination.id
  });

  return requestJson(`/api/nearby?${params.toString()}`, {
    mode: "curated",
    data: destination.nearbyPoints.map((name, index) => ({
      id: `${destination.id}-nearby-${index}`,
      name,
      kinds: "local point of interest",
      distance: `${(index + 1) * 2} km`
    }))
  });
}
