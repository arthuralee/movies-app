import { History } from "history";
import queryString from "query-string";

export function getSearchQ(history: History) {
  const qs = queryString.parse(history.location.search);
  const searchQ = Array.isArray(qs.q) ? qs.q[0] : qs.q || "";
  return history.location.pathname === "/search" ? searchQ : "";
}

export function formatDate(dateStr: string | null) {
  if (!dateStr) {
    return "Unknown date";
  }
  return new Date(dateStr).toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
