export function formatDate(date: string | null): string {
  if (!date) return "Date not available";

  return new Date(date).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Lagos",
    hour12: true,
  });
}


export function formatDateDay(date: string | null) : string{
  if (!date) return "Date not available";

  return new Date(date).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateTime(date: string | null) : string{
  if (!date) return "Date not available";

  return new Date(date).toLocaleTimeString("en-NG", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Lagos",
    hour12: true,
  });
}