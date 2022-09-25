import Footer from "../footer/Footer";
import Header from "../header/Header"
import Section from "../section/Section";
import GridTemplate from "../grid/GridTemplate";

const HOME = [
	{
		path: "/blog",
		title: "Blog",
		src: "https://lh3.googleusercontent.com/pw/AL9nZEWe9IyE5NsLyOrR1v2oa0vs5m19i9Lzfvcjsk0k7yfUZQr9hUDpyWyfNDzK87JUSForeOcbBLKbRNorl0kjUuGrm2ts47lAwEpQGDwcOsATW1IdW0xmzXlVWglrCZGlqhrOm9vrBvXAG_KhbMxHhCFv=w1280-h859-no?authuser=0",
	},
	{
		path: "/resume",
		outPage: true,
		title: "O Mnie",
		src: "https://lh3.googleusercontent.com/pw/AL9nZEW5vXsca7XGPfpGFEa6hfIzDzEJcDXon0tzpFNkvdBjtseAdG38M3CQkKPNnNppZdBhOzeHQ9eI5OllspWoJVDKpSRCQK8xegInSY2EDcRzMM0XqvnLptCEfSoyZbFWhV2VSx-znwzus7ADsRiE6kwL=w1280-h851-no?authuser=0",
	},
];


export default function Main() {
	return (
		<>
			<Header />
			<Section
				content={
					<GridTemplate arr={HOME} />
				}
			/>
			<Footer />
		</>
	);
}


