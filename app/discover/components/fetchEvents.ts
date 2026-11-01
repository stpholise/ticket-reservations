
const API_BASE_URL = "https://ticket-days.onrender.com";

export async function getEvents() {
  const response = await fetch(`${API_BASE_URL}/events`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch events: ${response.status}`);
  }

  return response.json();
}