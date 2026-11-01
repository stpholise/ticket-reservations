export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}