import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../buttons/Button";
import { MobileHam, PageContainerAside, PageNav, StyledNavLink } from "./Grid.styled";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { useTheme } from "styled-components";

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
		path: "/weather",
		text: "Weather App",
	},
	{
		path: "https://najwer23.github.io/resume/",
		text: "Resume",
		out: true,
		color: "#F28627"
	}
]

export const Aside = ({ isMenuOpen, setIsMenuOpen }: Props) => {
	const location = useLocation();
	const [width] = useWindowSize();
	const theme = useTheme();

	const pathName = location.pathname;

	return (
		<PageContainerAside $isMenuOpen={isMenuOpen}>
			<PageNav>
				<MobileHam $isMenuOpen={isMenuOpen}>
					<Button
						styled={"hamburger"}
						type={"button"}
						title={"Menu"}
						text={<FontAwesomeIcon icon={faBurger} size={"2xl"} />}
						ariaLabel={"menu-close"}
						onClick={() => setIsMenuOpen(false)}
					/>
				</MobileHam>

				{navLinks && (
					navLinks.map(({path, text, out, color}) => (
						<React.Fragment key={path + text}>
							{out && (
								<StyledNavLink>
									<Link to={path} target="_blank" rel="noopener noreferrer" style={{ color: color ?? "grey" }}>
										{text}
									</Link>
								</StyledNavLink>
							)}
							{!out && (
								<StyledNavLink $current={pathName === path} onClick={() => width < theme.device.tabletNum && setIsMenuOpen(false)}>
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