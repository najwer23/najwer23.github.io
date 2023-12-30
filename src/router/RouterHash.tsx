import { RouterProvider, ScrollRestoration, createHashRouter } from "react-router-dom";

export const router = createHashRouter([
	{
		path: "/",
		element: (
			<>
				<>https://www.linkedin.com/in/najwer23/</>
				<ScrollRestoration />
			</>
		),
	},
]);

export const RouterHash = () => <RouterProvider router={router} />