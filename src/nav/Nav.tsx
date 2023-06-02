import './Nav.css';
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { MenuProps } from '../types';


export const Nav = () : JSX.Element => {
	return (
		<nav className='nav'>
			<div>
				<span className='nav-logo-title'>Mariusz Najwer</span>
			</div>
			<div>
				<Menu menuType={"notlogged"} />
			</div>
		</nav>
	)
}


const MENU = {
	notlogged: {
		mobile: [
			{ path: "/", text: "Homepage" },
			{ path: "/resume", text: "Resume", outPage: true },
		],
		desktop: [
			{ path: "/", text: "Homepage" },
			{ path: "/resume", text: "Resume", outPage: true },
		],
		universal: [
			{ path: "/", text: "Homepage" },
			{ path: "/resume", text: "Resume", outPage: true },
		]
	},
};

const Menu = ({menuType}: MenuProps): JSX.Element => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { pathname } = useLocation();

	let menu: any = {};

	if (menuType === "notlogged" ) menu = MENU["notlogged"]["universal"];

	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
	}

	return (
		<>
			<button onClick={toggleMenu} className='noselect snail' title="Menu Open" aria-label="Menu Open"> MENU </button>

			{ isMenuOpen && (
				<div className="popup-menu">
					<div className="close-button-wrapper">
						<div className="close-button">
							<button onClick={toggleMenu} className='noselect snail red' title="Menu Close" aria-label="Menu Close"> CLOSE </button>
						</div>
					</div>

					<div className='layout1'>
						<ul className='popup-menu-list'>
							{menu &&
								menu.map((v: any, i: number) => (
									<li className='fluid-h1' key={i}>
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
					</div>
				</div>
			)}
		</>
	)
}



