import './Nav.css';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { MenuProps } from '../types';
import { Button } from '../buttons/Button';


export const Nav = () : JSX.Element => {
	return (
		<nav className='nav'>
			<div className='nav-logo-title-wrapper'>
				<Link to={"/"} className="noselect">
					<span className='nav-logo-title'>
						Mariusz Najwer
					</span>
				</Link>
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
			{ path: "/contact", text: "Contact" },
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
			<Button
				type={"button"}
				onClick={toggleMenu}
				className={'noselect snail'}
				title={"Menu Open"}
				ariaLabel={"Men Open"}
				text={"MENU"}
			/>

			{ isMenuOpen && (
				<div className="popup-menu">
					<div className="popup-menu-button-close-wrapper">
						<Button
							type={"button"}
							onClick={toggleMenu}
							className={'noselect snail red'}
							title={"Menu Close"}
							ariaLabel={"Menu Close"}
							text={"CLOSE"}
						/>
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
											<Link to={v.path} className="noselect" style={{color: pathname === v.path ? "grey" : "inherit"}}>
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



