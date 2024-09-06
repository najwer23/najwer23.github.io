import { executeFetch } from "@najwer23/config/configFetch";

type QueryLeetcode = {
  totalSolved: number
};

export const queryLeetcode = async (): Promise<QueryLeetcode> => {
  const url = new URL(`https://leetcode-api-faisalshohag.vercel.app/najwer23`);
  return await executeFetch(url);
};