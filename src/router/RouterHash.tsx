import { RouterProvider, ScrollRestoration, createHashRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Contact } from "../pages/contact/Contact";

export const router = createHashRouter([
	{
		path: "/",
		element: (
			<>
				<Home/>
				{/* <ScrollRestoration /> */}
			</>
		),
	},
	{
		path: "/contact",
		element: (
			<>
				<Contact />
				{/* <ScrollRestoration /> */}
			</>
		),
	},
]);

export const RouterHash = () => <RouterProvider router={router} />
