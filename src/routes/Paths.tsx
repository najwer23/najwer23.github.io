import { CustomHashRoutesPathElement } from "../types";

export const paths: CustomHashRoutesPathElement[] = [
	{
		path: "*",
		element: <>Error 404</>
	},
	{
		path: "/",
		element: <>Mariusz 42</>
	}
];