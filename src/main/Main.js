import Footer from "../footer/Footer";
import Header from "../header/Header"
import Section from "../section/Section";
import Carousel from "../carousel/Carousel";
import Slideshow from "../slideshow/Slideshow";

const SHORTCUTS_CAROUSEL = [
	{
		path: "/resume",
		outPage: true,
		title: "Resume",
	},
	{
		path: "/forecast",
		title: "Forecast",
	},
	{
		path: "/flip-card",
		outPage: true,
		title: "Valentine's Day Card",
	},
	{
		path: "https://jabber.cyclic.app",
		outPage: true,
		title: "Jabber",
	},
	{
		path: "/blog",
		title: "Blog",
	},
];

const GUI_CAROUSEL = [
	{
		path: "https://najwer23.github.io/gui-challenge/calendar/",
		title: "Calendar",
	},
	{
		path: "https://najwer23.github.io/gui-challenge/carousel-list/",
		title: "Carousel",
	},
	{
		path: "https://najwer23.github.io/gui-challenge/slideshow/",
		title: "Slideshow",
	},
	{
		path: "https://najwer23.github.io/gui-challenge/video-player/",
		title: "Video Player",
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
		path: "https://najwer23.github.io/gui-challenge/email-html/",
		title: "Email HTML",
	},
	{
		path: "https://najwer23.github.io/gui-challenge/carousel-one-slide/",
		title: "Slider",
	},
];


const SLIDESHOW = [
	{
		src: "https://lh3.googleusercontent.com/pw/AL9nZEUhD7433N-KvJZz2QLuNy_5Q9-qDx0bnyoXstWvdeaXAEz6pucs6JEL96_Pp0sB7o3baBrzHkp4KSWQ8ISCpOGQ5sM1MhZ4aF6rzl0H8vU3kvAJCPJdE9S9T_ba3D6XYesu2wLJbOZTCygeS9IZBzcd=w958-h599-no?authuser=0",
	},
	{
		src: "https://lh3.googleusercontent.com/pw/AL9nZEVbRB-kYASsq_lRmwJEawOxtyt5jItU93IyLtU5d9g1YVmrQyz5MUw59p0XfTDd194qkQglaEI9eJt5bHpDyKiXXqWpaelE-vcOqMMp4gAwVi4fvTkQ6Tacu14k9wnIxJ-B2PrvvJiWn2-Trs75aojM=w958-h368-no?authuser=0",
	},
	{
		src: "https://lh3.googleusercontent.com/pw/AL9nZEX52st2pQN4EhbhZXxj2MHfK07qgrdLLV3FcCwNh8H_oRO1NhRHCreBxYgOS6ilInphiPU7PArcWAjO02SeZB8V9j11ofWQ-Oq08XoU5jHVZA1IkE4vvBNs5FTx4n3PTe5cduP_b1We0ZnNJa4ssfxT=w958-h539-no?authuser=0",
	},
];

export default function Main() {
	return (
		<>
			<Header />
			<Carousel
				title="Mini projects"
				id="carousel0"
				arr={SHORTCUTS_CAROUSEL}
				type={"shortcuts"}
			/>
			<Carousel title="GUI Snippets" id="carousel1" arr={GUI_CAROUSEL} />
			<Section
				content={
					<Slideshow
						arr={SLIDESHOW}
						id="slideshow1"
						title={"Favorite landscape"}
					/>
				}
			/>
			<Footer />
		</>
	);
}


