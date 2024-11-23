import { executeFetch } from '@najwer23/config/configFetch';

// type QueryLeetcode = {
//   najwer23: {
//     submitStatsGlobal: {
//       acSubmissionNum: {
//         difficulty: string;
//         count: string;
//       }[],
//     }
//   };
// };

type QueryLeetcode = {
  totalSolved: string
};

export const queryLeetcode = async (): Promise<QueryLeetcode> => {
  const url = new URL(`https://leetcode-api-faisalshohag.vercel.app/najwer23`);
  // const url = new URL(`https://leetcodeapi-v1.vercel.app/najwer23`);
  return await executeFetch(url);
};
