import { RouterProvider, createHashRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Contact } from "../pages/contact/Contact";
import { Weather } from "../pages/weather/Weather";
import ScrollToTop from "./ScrollToTop";
import { Gallery } from "../pages/gallery/Gallery";
import { Quotes } from "../pages/quotes/Quotes";

export const router = createHashRouter([
	{
		path: "/",
		element: (
			<>
				<ScrollToTop />
				<Home />
				{/* <ScrollRestoration /> */}
			</>
		),
	},
	{
		path: "/contact",
		element: (
			<>
				<ScrollToTop />
				<Contact />
			</>
		),
	},
	{
		path: "/weather",
		element: (
			<>
				<ScrollToTop />
				<Weather />
			</>
		),
	},
	{
		path: "/gallery",
		element: (
			<>
				<ScrollToTop />
				<Gallery />
			</>
		),
	},
	{
		path: "/quotes",
		element: (
			<>
				<ScrollToTop />
				<Quotes />
			</>
		),
	},
]);

export const RouterHash = () => <RouterProvider router={router} />
