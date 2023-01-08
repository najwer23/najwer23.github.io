import "./Header.css";
import Menu from "./menu/Menu"
import { Link } from "react-router-dom";


export default function Header() {
	return (
		<>
			<header className="header-wrapper">
				<div className="header-container">
					<div className="header-logo">
						<Link to={"/"} title={"Mariusz Najwer"}>
							<span className="header-logo-title">Mariusz Najwer</span>
						</Link>
					</div>
					<div className="header-menu">
						<Menu menuType={"notlogged"} />
					</div>
				</div>
			</header>
		</>
	);
}
