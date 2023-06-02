import { Routes, Route, HashRouter } from "react-router-dom";
import { ScrollToTop } from "./ScrollToTop";
import { CustomHashRoutesProps } from "../types";

export const CustomHashRoutes = ({routes}: CustomHashRoutesProps): JSX.Element => {
	return (
		<HashRouter>
			<Routes>
				{routes.map((item, i) => (
					<Route
						key={i}
						path={item.path}
						element={
							<>
								<ScrollToTop />
								{item.element}
							</>
						}
					/>
				))}
			</Routes>
		</HashRouter>
	);
}