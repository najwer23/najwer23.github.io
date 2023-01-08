import Footer from "../footer/Footer";
import Header from "../header/Header";
import Section from "../section/Section";
import { useEffect } from "react";
import "./Pattern.css";

export default function Pattern(props) {
	useEffect(() => {}, []);

	return (
		<>
			<Header />
			<Section content={<Post />} />
			<Footer />
		</>
	);
}
