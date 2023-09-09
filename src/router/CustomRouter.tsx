import { RouterProvider, createHashRouter } from "react-router-dom";
import { RoutHomepage } from "./RoutHomepage";

export const router = createHashRouter([
	{
		path: "/",
		element: <RoutHomepage />,
	},
]);

export const CustomRouter = (): JSX.Element => {
	return <RouterProvider router={router} />
}