import "./Header.css";
import Menu from "./menu/Menu"

export default function Header() {
	return (
		<>
			<header className="header-wrapper">
				<div className="header-container">
					<div className="header-logo">
						<a href="/">
							<span>Mariusz Najwer</span>
						</a>
					</div>
					<div className="header-menu">
						<Menu menuType={"notlogged"} />
					</div>
				</div>
			</header>
		</>
	);
}
