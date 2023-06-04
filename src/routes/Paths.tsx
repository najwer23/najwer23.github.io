import { CustomHashRoutesPathElement } from "../types";
import { Homepage } from "../homepage/Homepage";
import { Contact } from "../contact/Contact";
import { Faq } from "../faq/Faq";

export const paths: CustomHashRoutesPathElement[] = [
	{
		path: "*",
		element: <>Error 404</>
	},
	{
		path: "/",
		element: <Homepage />
	},
	{
		path: "/contact",
		element: <Contact />
	},
	{
		path: "/faq",
		element: <Faq />
	}
];