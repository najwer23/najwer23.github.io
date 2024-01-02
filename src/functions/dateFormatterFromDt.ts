import { isEmpty } from "./isEmpty";

export const dateFormatterFromDt = (dt: any): string | null => {
  return isEmpty(dt)
    ? null
    : new Date(dt * 1000).toLocaleString("pl-PL", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        year: "numeric",
        second: "2-digit"
      });
};
