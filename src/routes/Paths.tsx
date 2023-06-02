import { CustomHashRoutesPathElement } from "../types";
import { Homepage } from "../homepage/Homepage";

export const paths: CustomHashRoutesPathElement[] = [
	{
		path: "*",
		element: <>Error 404</>
	},
	{
		path: "/",
		element: <Homepage />
	}
];