import "./Menu.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useWindowSize from "../custom-hooks/useWindowSize"

const MENU = {
	notlogged: {
		mobile: [
			{ path: "/", text: "Strona Główna", innerPage: true },
			{ path: "/travel", text: "Travel" },
			{ path: "/resume", text: "O mnie", outPage: true },
		],
		desktop: [
			{ path: "/", text: "Strona Główna", innerPage: true },
			{ path: "/travel", text: "Travel" },
			{ path: "/resume", text: "O mnie", outPage: true },
			{ path: "/resume", text: "O mnie", outPage: true },
			{ path: "/resume", text: "O mnie", outPage: true },
			{ path: "/resume", text: "O mnie", outPage: true },
			{ path: "/resume", text: "O mnie", outPage: true },
			{ path: "/resume", text: "O mnie", outPage: true },
			{ path: "/resume", text: "O mnie", outPage: true },
			{ path: "/resume", text: "O mnie", outPage: true },
			{ path: "/resume", text: "O mnie", outPage: true },
			{ path: "/resume", text: "O mnie", outPage: true },
			{ path: "/resume", text: "O mnie", outPage: true },
			{ path: "/resume", text: "O mnie", outPage: true },
			{ path: "/resume", text: "O mnie", outPage: true },
			{ path: "/resume", text: "O mnie", outPage: true },
		],
	},
};

export default function Main(props) {
	const [width, height] = useWindowSize();
	const [menu, setMenu] = useState();


	useEffect(() => {
		setMenu(
			width < 500 ? MENU[props.menuType].mobile : MENU[props.menuType].desktop
		);
	}, [width])

	useEffect(() => {
		const html = document.documentElement;
		const toggle = document.getElementById("toggle");
		const circle = document.getElementById("bg-circle");
		const circleWidth = circle.clientWidth;
		const getVpdr = () => {
			const vph = Math.pow(html.offsetHeight, 2); // Height
			const vpw = Math.pow(html.offsetWidth, 2); // Width
			const vpd = Math.sqrt(vph + vpw); // Diagonal
			return (vpd * 2) / circleWidth; // Circle radius
		};

		const openbnavbar = () => {
			const openTimeline = new TimelineMax();
			openTimeline.to(".bnavbar", 0, { display: "flex" });
			openTimeline.to("#bg-circle", 1.5, {
				scale: getVpdr(),
				ease: Expo.easeInOut,
			});
			openTimeline.staggerFromTo(
				".bnavbar ul li",
				0.5,
				{ y: 25, opacity: 0 },
				{ y: 0, opacity: 1 },
				0.1,
				1
			);
		};

		const closebnavbar = () => {
			const closeTimeline = new TimelineMax();
			closeTimeline.staggerFromTo(
				".bnavbar ul li",
				0.5,
				{ y: 0, opacity: 1, delay: 0.5 },
				{ y: 25, opacity: 0 },
				-0.1
			);
			closeTimeline.to("#bg-circle", 1, {
				scale: 0,
				ease: Expo.easeInOut,
				delay: -0.5,
			});
			closeTimeline.to(".bnavbar", 0, { display: "none" });
		};

		let isOpen = false;

		toggle.onclick = function () {
			if (isOpen) {
				this.classList.remove("active");
				closebnavbar();
			} else {
				this.classList.add("active");
				openbnavbar();
			}
			isOpen = !isOpen;
		};

		window.onresize = () => {
			if (isOpen) {
				gsap.to("#bg-circle", 1, { scale: getVpdr(), ease: Expo.easeInOut });
			}
		};
	}, []);

	return (
		<>
			<button className="bnavbar-toggle" id="toggle" type="button">
				<svg viewBox="0 0 100 100" width="80">
					<path
						className="line top"
						d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
					/>
					<path className="line middle" d="m 30,50 h 40" />
					<path
						className="line bottom"
						d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
					/>
				</svg>
			</button>
			<div id="wrapper-menu">
				<div className="containerMenu">
					<div className="bnavbar">
						<ul id="menu">
							{menu &&
								menu.map((v, i) => (
									<li key={i}>
										{v.outPage || v.innerPage ? (
											<a
												href={v.path}
												rel="noreferrer"
												target={v.innerPage ? "" : "_blank"}
												className="noselect"
											>
												{v.text}
											</a>
										) : (
											<Link to={v.path} className="noselect">
												{v.text}
											</Link>
										)}
									</li>
								))}
						</ul>
					</div>
				</div>
				<div id="bg-circle"></div>
			</div>
		</>
	);
}
