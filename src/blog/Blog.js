import Footer from "../footer/Footer";
import Header from "../header/Header";
import Section from "../section/Section";
import GridTemplate from "../grid/GridTemplate";

export default function Blog() {
	const POST = [
		{
			path: "/blog/barcelona",
			title: "Barcelona",
			src: "https://lh3.googleusercontent.com/pw/AL9nZEVlHcQasQcKFb-JhDP2tXGW9zuyhnMaXTNpFDBM8XZ3LSxv5pm6CIt18DDszUWJeVAF8AtqQiXDoxccgSzQaQyxJv4LemLudqJe8e9o_mfhKXQpm8gPEMtazwGvabc-g1X6xkaUWsqWU-MHH9VUzjXd=w723-h964-no?authuser=0",
		},
	];

	return (
		<>
			<Header />
			<Section content={<GridTemplate arr={POST} />} />
			<Footer />
		</>
	);
}
