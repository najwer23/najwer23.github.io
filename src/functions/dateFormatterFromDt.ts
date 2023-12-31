import { isEmpty } from "./isEmpty";

export const dateFormatterFromDt = (dt: any): string | null => {
  return isEmpty(dt) ? null : new Date(dt * 1000).toLocaleString();
};
