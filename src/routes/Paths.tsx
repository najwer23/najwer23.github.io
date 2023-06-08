import { CustomHashRoutesPathElement } from "../types/types";
import { Homepage } from "../homepage/Homepage";
import { Contact } from "../contact/Contact";
import { Faq } from "../faq/Faq";
import { Page404 } from "../page404/Page404";
import { Weather } from "../weather/Weather"

export const paths: CustomHashRoutesPathElement[] = [
	{
		path: "*",
		element: <Page404 />
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
	},
	{
		path: "/weather",
		element: <Weather />
	}
];