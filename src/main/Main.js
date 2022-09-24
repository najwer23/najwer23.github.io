import Footer from "../footer/Footer";
import Header from "../header/Header"
import Section from "../section/Section";
import GridTemplate from "../grid/GridTemplate";

export default function Main() {
	return (
		<>
			<Header />

			<Section content={<GridTemplate />} />

			<Footer />
		</>
	);
}


