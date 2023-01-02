import "./Menu.css";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import useWindowSize from "../../custom-hooks/useWindowSize";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
} from "@fortawesome/free-solid-svg-icons";



const MENU = {
	notlogged: {
		mobile: [
			{ path: "/", text: "Strona Główna" },
			{ path: "/blog", text: "Blog" },
			{ path: "/resume", text: "About", outPage: true },
			{ path: "https://jabber-23.ue.r.appspot.com/", text: "Jabber", outPage: true },
		],
		desktop: [
			{ path: "/", text: "Strona Główna" },
			{ path: "/blog", text: "Blog" },
			{ path: "/resume", text: "About", outPage: true },
			{ path: "https://jabber-23.ue.r.appspot.com/", text: "Jabber", outPage: true },
		],
	},
};

export default function Menu(props) {
	const { pathname } = useLocation();
	const [width, height] = useWindowSize();
	const [menu, setMenu] = useState();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuPopUp = useRef(null);

	useEffect(() => {
		setMenu(
			width < 500 ? MENU[props.menuType].mobile : MENU[props.menuType].desktop
		);
	}, [width])

	useEffect(() => {
		let body = document.querySelector("body")

		if (isMenuOpen) {
			body.classList.add("menu-open");
		} else {
			body.classList.remove("menu-open");
		}

	}, [isMenuOpen]);


	function closeMenu() {
		setIsMenuOpen(!isMenuOpen);
		menuPopUp.current.classList.remove("active");
	}

	function openMenu() {
		setIsMenuOpen(!isMenuOpen);
		menuPopUp.current.classList.add("active");
	}

	return (
		<>
			<button onClick={() => openMenu()} className="noselect ham">
				<FontAwesomeIcon icon={faBars} size="2xl" />
			</button>

			<div className="popup-menu" ref={menuPopUp}>
				<div className="close-button-wrapper">
					<div className="close-button">
						<button onClick={() => closeMenu()} className="noselect ham">
							<FontAwesomeIcon icon={faBars} size="2xl" />
						</button>
					</div>
				</div>

				<nav>
					<ul>
						{menu &&
							menu.map((v, i) => (
								<li key={i}>
									{v.outPage ? (
										<a
											href={v.path}
											rel="noreferrer"
											target={v.innerPage ? "" : "_blank"}
											className="noselect"
										>
											{v.text}
										</a>
									) : (
										<Link to={v.path} className="noselect" style={{color: pathname == v.path ? "grey" : "inherit"}}>
											{v.text}
										</Link>
									)}
								</li>
							))}
					</ul>
				</nav>
			</div>
		</>
	);
}



//
