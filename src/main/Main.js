import Footer from "../footer/Footer";
import Header from "../header/Header"
import Section from "../section/Section";
import GridTemplate from "../grid/GridTemplate";
import Carousel from "../carousel/Carousel";

const HOME = [
	{
		path: "/blog",
		title: "Blog",
		src: "https://lh3.googleusercontent.com/pw/AL9nZEWe9IyE5NsLyOrR1v2oa0vs5m19i9Lzfvcjsk0k7yfUZQr9hUDpyWyfNDzK87JUSForeOcbBLKbRNorl0kjUuGrm2ts47lAwEpQGDwcOsATW1IdW0xmzXlVWglrCZGlqhrOm9vrBvXAG_KhbMxHhCFv=w1280-h859-no?authuser=0",
	},
	{
		path: "/resume",
		outPage: true,
		title: "About",
		src: "https://lh3.googleusercontent.com/pw/AL9nZEW5vXsca7XGPfpGFEa6hfIzDzEJcDXon0tzpFNkvdBjtseAdG38M3CQkKPNnNppZdBhOzeHQ9eI5OllspWoJVDKpSRCQK8xegInSY2EDcRzMM0XqvnLptCEfSoyZbFWhV2VSx-znwzus7ADsRiE6kwL=w1280-h851-no?authuser=0",
	},
	{
		path: "https://jabber-23.ue.r.appspot.com/",
		outPage: true,
		title: "Jabber",
		src: "https://lh3.googleusercontent.com/pw/AL9nZEUuMSoEFBbWAPR_-2I0Qf1RSTSLPw3La7oexoXfDnhmHTuYH1n9-LkcFDROMKC28VVCZRCMAc7QL_ZDLr9qTGMGBoZErnPXPJM6oJmf3peJLklXYrHQOzLfTcZU1RniYhDMnYTh3ypVFtZqEovJcT5O=w1920-h870-no?authuser=0",
	},
];

const GUI_CAROUSEL = [
	{
		path: "https://najwer23.github.io/gui-challenge/carousel-list/",
		title: "Carousel",
	},
	{
		path: "https://najwer23.github.io/gui-challenge/carousel-one-slide/",
		title: "Slider",
	},
	{
		path: "https://najwer23.github.io/gui-challenge/scrollbar",
		title: "Scrollbar",
	},
	{
		path: "https://najwer23.github.io/gui-challenge/masonry-grid/",
		title: "Masonry Grid",
	},
	{
		path: "https://najwer23.github.io/gui-challenge/video-player/",
		title: "Video Player",
	},
	{
		path: "https://najwer23.github.io/gui-challenge/email-html/",
		title: "Email HTML",
	},
];


export default function Main() {
	return (
		<>
			<Header />
			<Section content={<GridTemplate arr={HOME} title="Shortcuts" />} />
			<Carousel title="GUI Snippets" id="carousel1" arr={GUI_CAROUSEL}/>
			<Footer />
		</>
	);
}


