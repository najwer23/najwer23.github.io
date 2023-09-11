import { RouterProvider, ScrollRestoration, createHashRouter } from "react-router-dom";
import { RoutHomepage } from "./RoutHomepage";
import { RouteWeather } from "./RouteWeather";
import { Grid } from "../grid/Grid";

export const router = createHashRouter([
	{
		path: "/",
		element: (
			<>
				<Grid>
					<RoutHomepage />
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
]);

export const CustomRouter = (): JSX.Element => {
	return <RouterProvider router={router} />
}