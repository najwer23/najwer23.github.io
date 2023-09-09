import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../buttons/Button";
import { HomepageLink, MobileHam, PageContainerAside, PageNav, StyledNavLink } from "./Grid.styled";
import { faBurger, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface Props {
	isMenuOpen: boolean;
	setIsMenuOpen: (e: boolean) => void
}

export const Aside = ({ isMenuOpen, setIsMenuOpen }: Props) => {
	return (
		<PageContainerAside $isMenuOpen={isMenuOpen}>
			<PageNav>
				<MobileHam $isMenuOpen={isMenuOpen}>
					<Button
						type={"button"}
						title={"Menu"}
						text={<FontAwesomeIcon icon={faBurger} size={"2xl"} />}
						ariaLabel={"menu-close"}
						onClick={() => setIsMenuOpen(false)}
					/>
				</MobileHam>
				<HomepageLink>
					<Link to={"/"}>
						<FontAwesomeIcon icon={faTerminal} size={"2xl"} style={{ color: "black", marginBottom: "20px" }} />
					</Link>
				</HomepageLink>
				<StyledNavLink>
					<Link to={"/about"}>
						About
					</Link>
				</StyledNavLink>
				<StyledNavLink>
					<Link to={"/about"}>
						Weather
					</Link>
				</StyledNavLink>
				<StyledNavLink>
					<Link to={"/about"}>
						Contact
					</Link>
				</StyledNavLink>
				<StyledNavLink>
					<Link to={"https://najwer23.github.io/resume/"} target="_blank" rel="noopener noreferrer" style={{ color: "#F28627" }}>
						Resume
					</Link>
				</StyledNavLink>
			</PageNav>
		</PageContainerAside>
	)
}