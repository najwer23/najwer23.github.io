import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../buttons/Button";
import { MobileHam, PageContainerAside, PageNav, StyledNavLink } from "./Grid.styled";
import { faBurger, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import React from "react";

interface Props {
	isMenuOpen: boolean;
	setIsMenuOpen: (e: boolean) => void
}

const navLinks = [
	{
		path: "/",
		text: "Home",
	},
	{
		path: "/about",
		text: "About",
	},
	{
		path: "https://najwer23.github.io/resume/",
		text: "Resume",
		out: true,
	}
]

export const Aside = ({ isMenuOpen, setIsMenuOpen }: Props) => {
	const location = useLocation();
	const pathName = location.pathname;

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

				{navLinks && (
					navLinks.map(({path, text, out}) => (
						<React.Fragment key={path + text}>
							{out && (
								<StyledNavLink>
									<Link to={path} target="_blank" rel="noopener noreferrer" style={{ color: "#F28627" }}>
										{text}
									</Link>
								</StyledNavLink>
							)}
							{!out && (
								<StyledNavLink $current={pathName==path}>
									<Link to={path}>
										{text}
									</Link>
								</StyledNavLink>
							)}
						</React.Fragment>
					))
				)}

			</PageNav>
		</PageContainerAside>
	)
}