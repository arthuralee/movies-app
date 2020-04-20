import { History } from "history";
import queryString from "query-string";

export function getSearchQ(history: History) {
  const qs = queryString.parse(history.location.search);
  const searchQ = Array.isArray(qs.q) ? qs.q[0] : qs.q || "";
  return history.location.pathname === "/search" ? searchQ : "";
}
