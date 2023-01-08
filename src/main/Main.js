import Footer from "../footer/Footer";
import Header from "../header/Header"
import Section from "../section/Section";
import GridTemplate from "../grid/GridTemplate";
import Carousel from "../carousel/Carousel";
import Slideshow from "../slideshow/Slideshow";

const HOME = [
	{
		path: "/blog",
		title: "Blog",
		src: "https://lh3.googleusercontent.com/pw/AL9nZEUnlhrRXv7fp2Ak4ZHpKrf0gXWC2lrbS5ON1OqvzWta3vAZedWtI-JdjKk2ETYfHMIK_4zVV-blnamYfjhkYcKtx_e9kDsXbonjCzTBxKj1d3hh6Q3HvF_IOyXm8zNhe2mz_TBk4VR-Ic7UgLpiIBHH=w958-h643-no?authuser=0",
	},
	{
		path: "/resume",
		outPage: true,
		title: "Resume",
		src: "https://lh3.googleusercontent.com/pw/AL9nZEUjwVI7dC87ZLpnh9L2Xe6oCv2VsKt4EzPLOaGUor5bA19uga0o8QyhFc_mSFH7V-CbTaoTp8xPv_IHwbWsUu-isoHTpBPnqi3XHDvYz8IB1-lVXZjXZx5RRyKgBI4PbJPEHvlH2JKuf0ZO6F6BYZDR=w1280-h851-no?authuser=0",
	},
	{
		path: "https://jabber-23.ue.r.appspot.com/",
		outPage: true,
		title: "Jabber",
		src: "https://lh3.googleusercontent.com/pw/AL9nZEXErCenXmZhx5vxKSF9usz7IedklH_wT2aVToysRRGZkRs_pH6DGi5hfoqliz-hVaCDnk3D9o_46wEdldcOX6YnYh1fS91Zn8aqwhqoyMXAsHUzqC61t-1HVrpkM46Dw6KbCQZPaaKE-ueJ1ka6tVDw=w958-h435-no?authuser=0",
	},
	{
		path: "/forecast",
		title: "Forecast",
		src: "https://lh3.googleusercontent.com/pw/AL9nZEWcFjcbFtHgP-GX832N9rmbLX0xGGnTHrPOQ1opsLjGoEVxeTEFnNTGyoqQX_SSHTy3lC9MXMlGMSJ4KuaTJRCLidLp5rNcqh1ogM9pd6TT2WbyZkWkqzkG51SsgzPSfNgdj5jUimpYB2HH9rzhW5bj=w1280-h720-no?authuser=0",
	},
];

const GUI_CAROUSEL = [
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
			<Section content={<GridTemplate arr={HOME} title="Shortcuts" />} />
			<Carousel title="GUI Snippets" id="carousel1" arr={GUI_CAROUSEL} />
			<Section
				content={
					<Slideshow arr={SLIDESHOW} id="slideshow1" title={"FAV Landscape"} />
				}
			/>

			<Footer />
		</>
	);
}


