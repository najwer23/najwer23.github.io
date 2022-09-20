import { Routes, Route, HashRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Blog from "../blog/Blog"
import Main from "../main/Main"

export default function CustomHashRoutes() {
	let routes = [
		{
			path: "*",
			element: <>Ups..</>,
		},
		{
			path: "/blog",
			element: <Blog />,
		},
		{
			path: "/",
			element: <Main />,
		},
	];

	return (
		<HashRouter>
			<Routes>
				{routes.map((obj, i) => (
					<Route
						key={i}
						path={obj.path}
						element={
							<>
								<ScrollToTop />
								{obj.element}
							</>
						}
					/>
				))}
			</Routes>
		</HashRouter>
	);
}
