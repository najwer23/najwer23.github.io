import { RouterProvider, ScrollRestoration, createHashRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Contact } from "../pages/contact/Contact";
import { Weather } from "../pages/weather/Weather";

export const router = createHashRouter([
	{
		path: "/",
		element: (
			<>
				<Home/>
				<ScrollRestoration />
			</>
		),
	},
	{
		path: "/contact",
		element: (
			<>
				<Contact />
				<ScrollRestoration />
			</>
		),
	},
	{
		path: "/weather",
		element: (
			<>
				<Weather />
				<ScrollRestoration />
			</>
		),
	},
]);

export const RouterHash = () => <RouterProvider router={router} />
