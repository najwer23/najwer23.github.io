import { RouterProvider, ScrollRestoration, createHashRouter } from "react-router-dom";

export const router = createHashRouter([
	{
		path: "/",
		element: (
			<>
				<>Mariusz</>
				<ScrollRestoration />
			</>
		),
	},
]);

export const RouterHash = (): JSX.Element => {
	return <RouterProvider router={router} />
}