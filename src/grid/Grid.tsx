import { MobileHam, PageContainer, PageContainerMain } from "./Grid.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBurger, faTerminal } from "@fortawesome/free-solid-svg-icons"
import { Button } from "../buttons/Button"
import { useEffect, useState } from "react"
import { useWindowSize } from "../hooks/useWindowSize"
import { useTheme } from "styled-components"
import { Aside } from "./Aside"

interface Props {
	children: React.ReactNode
}

export const Grid = ({children}: Props): JSX.Element => {
	const [width, height] = useWindowSize()
	const theme = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState(() => width > theme.device.tabletNum)

	useEffect(() => {
		let body = document.querySelector("body")

		if (isMenuOpen && width < theme.device.tabletNum) {
			body!.classList.add("menu-open");
		}

		if (!isMenuOpen && width < theme.device.tabletNum) {
			body!.classList.remove("menu-open");
		}
	}, [isMenuOpen]);

	useEffect(() => {
		let body = document.querySelector("body")
		body!.classList.remove("menu-open");
		setIsMenuOpen(width > theme.device.tabletNum)
	}, [width]);

	return (
		<PageContainer>
			<Aside isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
			<PageContainerMain>
				<MobileHam>
					<Button
						type={"button"}
						title={"Menu"}
						text={<FontAwesomeIcon icon={faBurger} size={"2xl"} />}
						ariaLabel={"menu-open"}
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					/>
				</MobileHam>
				{children}
			</PageContainerMain>
		</PageContainer>
	)
}