import Footer from "../footer/Footer";
import Menu from "../menu/Menu"
import Title from "./Title"

export default function Main() {
	return (
		<>
			<Menu menuType={"notlogged"} />
			<Title />
			<Footer />
		</>
	);
}
