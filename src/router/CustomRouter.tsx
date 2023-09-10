import { RouterProvider, createHashRouter } from "react-router-dom";
import { RoutHomepage } from "./RoutHomepage";
import { RouteWeather } from "./RouteWeather";
import { Grid } from "../grid/Grid";

export const router = createHashRouter([
	{
		path: "/",
		element: <Grid><RoutHomepage /></Grid>,
	},
	{
		path: "/weather",
		element: <Grid><RouteWeather /></Grid>,
	},
]);

export const CustomRouter = (): JSX.Element => {
	return <RouterProvider router={router} />
}