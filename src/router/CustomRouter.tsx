import { RouterProvider, ScrollRestoration, createHashRouter } from "react-router-dom";
import { RouteHomepage } from "./RouteHomepage";
import { RouteContact } from "./RouteContact";
import { RouteWeather } from "./RouteWeather";
import { Grid } from "../grid/Grid";

export const router = createHashRouter([
	{
		path: "/",
		element: (
			<>
				<Grid>
					<RouteHomepage />
				</Grid>
				<ScrollRestoration />
			</>
		),
	},
	{
		path: "/weather",
		element: (
			<>
				<Grid>
					<RouteWeather />
				</Grid>
				<ScrollRestoration />
			</>
		),
	},
	{
		path: "/contact",
		element: (
			<>
				<Grid>
					<RouteContact />
				</Grid>
				<ScrollRestoration />
			</>
		),
	},
]);

export const CustomRouter = (): JSX.Element => {
	return <RouterProvider router={router} />
}