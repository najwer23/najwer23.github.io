import {CustomHashRoutes} from "./routes/CustomHashRoutes";
import { paths } from "./routes/Paths";

export default function App() {
  return (
		<>
			<CustomHashRoutes routes={paths}/>
		</>
	);
}