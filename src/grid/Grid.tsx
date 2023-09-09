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
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus quam, luctus at tempus ut, vestibulum mattis tellus. Etiam non lectus ut nisi dignissim laoreet vel at est. Nunc nibh urna, interdum eget eros a, hendrerit scelerisque nunc. Nulla a aliquet lacus, id egestas tortor. Suspendisse maximus malesuada justo non sagittis. Cras rutrum sagittis tincidunt. In vitae ante eget orci mattis blandit lobortis et mi. Fusce laoreet eu dolor et aliquam. Sed eleifend odio condimentum nibh bibendum, ac vestibulum tellus ultrices. Nullam porttitor sapien id ligula tincidunt, id aliquet odio sollicitudin. Phasellus ac egestas lorem, quis fermentum tellus. Cras et arcu ut elit malesuada suscipit. Proin quis volutpat sem. Nam ac turpis sit amet ante viverra vulputate eget quis lacus.

				Nulla dictum, lectus at aliquet sodales, arcu arcu ultricies libero, at ullamcorper ante erat nec nibh. Aliquam blandit mauris nec elit interdum placerat. Nunc dignissim dapibus dolor quis vulputate. Morbi sollicitudin volutpat purus et convallis. Nam ornare enim nec elementum cursus. Sed quis urna eu erat commodo tempor aliquet sollicitudin leo. Duis at nisi lectus. Quisque id turpis vel nulla porta pulvinar. Curabitur eu egestas tortor. Donec non eros feugiat, aliquam velit sed, lacinia risus. Nulla erat tellus, auctor vitae rhoncus ut, semper vehicula velit. Vivamus ut nisi urna. Ut fringilla, est ut suscipit interdum, erat tellus tincidunt purus, non feugiat ante erat a lorem.

				Maecenas in ornare augue. Maecenas congue ex nec nulla scelerisque, non convallis felis pulvinar. Nullam nec convallis mi. In hac habitasse platea dictumst. Praesent sed nisl ante. Suspendisse accumsan nisi non ante vulputate, efficitur auctor ex ullamcorper. Nullam blandit justo non justo mollis, quis luctus erat pellentesque. Aliquam ut tempor mauris. Suspendisse efficitur dolor nisi, ut dignissim erat efficitur eu. Suspendisse eget mi enim. Nulla venenatis posuere congue. Sed nunc quam, euismod ac ultricies vel, accumsan sit amet purus. Ut et velit non ex faucibus condimentum eu non neque. Praesent in arcu vulputate, elementum ante vitae, lobortis sapien.

				Nam eget tincidunt elit, vel rhoncus dui. Proin a posuere nisl, sed lobortis mi. Aliquam eros nisl, pharetra vel enim id, posuere aliquam eros. Aliquam feugiat, erat in vulputate rhoncus, velit est scelerisque nisi, vitae commodo sem ex id tortor. In condimentum dolor vulputate viverra condimentum. Nam scelerisque posuere felis, a tincidunt risus egestas at. Nullam non erat eget ligula malesuada varius vel sit amet elit. Fusce porttitor feugiat nibh vel semper. Nunc neque libero, scelerisque porta iaculis nec, sodales sed nunc. Aenean vel nibh eu quam rhoncus pulvinar.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus quam, luctus at tempus ut, vestibulum mattis tellus. Etiam non lectus ut nisi dignissim laoreet vel at est. Nunc nibh urna, interdum eget eros a, hendrerit scelerisque nunc. Nulla a aliquet lacus, id egestas tortor. Suspendisse maximus malesuada justo non sagittis. Cras rutrum sagittis tincidunt. In vitae ante eget orci mattis blandit lobortis et mi. Fusce laoreet eu dolor et aliquam. Sed eleifend odio condimentum nibh bibendum, ac vestibulum tellus ultrices. Nullam porttitor sapien id ligula tincidunt, id aliquet odio sollicitudin. Phasellus ac egestas lorem, quis fermentum tellus. Cras et arcu ut elit malesuada suscipit. Proin quis volutpat sem. Nam ac turpis sit amet ante viverra vulputate eget quis lacus.

				Nulla dictum, lectus at aliquet sodales, arcu arcu ultricies libero, at ullamcorper ante erat nec nibh. Aliquam blandit mauris nec elit interdum placerat. Nunc dignissim dapibus dolor quis vulputate. Morbi sollicitudin volutpat purus et convallis. Nam ornare enim nec elementum cursus. Sed quis urna eu erat commodo tempor aliquet sollicitudin leo. Duis at nisi lectus. Quisque id turpis vel nulla porta pulvinar. Curabitur eu egestas tortor. Donec non eros feugiat, aliquam velit sed, lacinia risus. Nulla erat tellus, auctor vitae rhoncus ut, semper vehicula velit. Vivamus ut nisi urna. Ut fringilla, est ut suscipit interdum, erat tellus tincidunt purus, non feugiat ante erat a lorem.

				Maecenas in ornare augue. Maecenas congue ex nec nulla scelerisque, non convallis felis pulvinar. Nullam nec convallis mi. In hac habitasse platea dictumst. Praesent sed nisl ante. Suspendisse accumsan nisi non ante vulputate, efficitur auctor ex ullamcorper. Nullam blandit justo non justo mollis, quis luctus erat pellentesque. Aliquam ut tempor mauris. Suspendisse efficitur dolor nisi, ut dignissim erat efficitur eu. Suspendisse eget mi enim. Nulla venenatis posuere congue. Sed nunc quam, euismod ac ultricies vel, accumsan sit amet purus. Ut et velit non ex faucibus condimentum eu non neque. Praesent in arcu vulputate, elementum ante vitae, lobortis sapien.

				Nam eget tincidunt elit, vel rhoncus dui. Proin a posuere nisl, sed lobortis mi. Aliquam eros nisl, pharetra vel enim id, posuere aliquam eros. Aliquam feugiat, erat in vulputate rhoncus, velit est scelerisque nisi, vitae commodo sem ex id tortor. In condimentum dolor vulputate viverra condimentum. Nam scelerisque posuere felis, a tincidunt risus egestas at. Nullam non erat eget ligula malesuada varius vel sit amet elit. Fusce porttitor feugiat nibh vel semper. Nunc neque libero, scelerisque porta iaculis nec, sodales sed nunc. Aenean vel nibh eu quam rhoncus pulvinar.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus quam, luctus at tempus ut, vestibulum mattis tellus. Etiam non lectus ut nisi dignissim laoreet vel at est. Nunc nibh urna, interdum eget eros a, hendrerit scelerisque nunc. Nulla a aliquet lacus, id egestas tortor. Suspendisse maximus malesuada justo non sagittis. Cras rutrum sagittis tincidunt. In vitae ante eget orci mattis blandit lobortis et mi. Fusce laoreet eu dolor et aliquam. Sed eleifend odio condimentum nibh bibendum, ac vestibulum tellus ultrices. Nullam porttitor sapien id ligula tincidunt, id aliquet odio sollicitudin. Phasellus ac egestas lorem, quis fermentum tellus. Cras et arcu ut elit malesuada suscipit. Proin quis volutpat sem. Nam ac turpis sit amet ante viverra vulputate eget quis lacus.

				Nulla dictum, lectus at aliquet sodales, arcu arcu ultricies libero, at ullamcorper ante erat nec nibh. Aliquam blandit mauris nec elit interdum placerat. Nunc dignissim dapibus dolor quis vulputate. Morbi sollicitudin volutpat purus et convallis. Nam ornare enim nec elementum cursus. Sed quis urna eu erat commodo tempor aliquet sollicitudin leo. Duis at nisi lectus. Quisque id turpis vel nulla porta pulvinar. Curabitur eu egestas tortor. Donec non eros feugiat, aliquam velit sed, lacinia risus. Nulla erat tellus, auctor vitae rhoncus ut, semper vehicula velit. Vivamus ut nisi urna. Ut fringilla, est ut suscipit interdum, erat tellus tincidunt purus, non feugiat ante erat a lorem.

				Maecenas in ornare augue. Maecenas congue ex nec nulla scelerisque, non convallis felis pulvinar. Nullam nec convallis mi. In hac habitasse platea dictumst. Praesent sed nisl ante. Suspendisse accumsan nisi non ante vulputate, efficitur auctor ex ullamcorper. Nullam blandit justo non justo mollis, quis luctus erat pellentesque. Aliquam ut tempor mauris. Suspendisse efficitur dolor nisi, ut dignissim erat efficitur eu. Suspendisse eget mi enim. Nulla venenatis posuere congue. Sed nunc quam, euismod ac ultricies vel, accumsan sit amet purus. Ut et velit non ex faucibus condimentum eu non neque. Praesent in arcu vulputate, elementum ante vitae, lobortis sapien.

				Nam eget tincidunt elit, vel rhoncus dui. Proin a posuere nisl, sed lobortis mi. Aliquam eros nisl, pharetra vel enim id, posuere aliquam eros. Aliquam feugiat, erat in vulputate rhoncus, velit est scelerisque nisi, vitae commodo sem ex id tortor. In condimentum dolor vulputate viverra condimentum. Nam scelerisque posuere felis, a tincidunt risus egestas at. Nullam non erat eget ligula malesuada varius vel sit amet elit. Fusce porttitor feugiat nibh vel semper. Nunc neque libero, scelerisque porta iaculis nec, sodales sed nunc. Aenean vel nibh eu quam rhoncus pulvinar.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus quam, luctus at tempus ut, vestibulum mattis tellus. Etiam non lectus ut nisi dignissim laoreet vel at est. Nunc nibh urna, interdum eget eros a, hendrerit scelerisque nunc. Nulla a aliquet lacus, id egestas tortor. Suspendisse maximus malesuada justo non sagittis. Cras rutrum sagittis tincidunt. In vitae ante eget orci mattis blandit lobortis et mi. Fusce laoreet eu dolor et aliquam. Sed eleifend odio condimentum nibh bibendum, ac vestibulum tellus ultrices. Nullam porttitor sapien id ligula tincidunt, id aliquet odio sollicitudin. Phasellus ac egestas lorem, quis fermentum tellus. Cras et arcu ut elit malesuada suscipit. Proin quis volutpat sem. Nam ac turpis sit amet ante viverra vulputate eget quis lacus.

				Nulla dictum, lectus at aliquet sodales, arcu arcu ultricies libero, at ullamcorper ante erat nec nibh. Aliquam blandit mauris nec elit interdum placerat. Nunc dignissim dapibus dolor quis vulputate. Morbi sollicitudin volutpat purus et convallis. Nam ornare enim nec elementum cursus. Sed quis urna eu erat commodo tempor aliquet sollicitudin leo. Duis at nisi lectus. Quisque id turpis vel nulla porta pulvinar. Curabitur eu egestas tortor. Donec non eros feugiat, aliquam velit sed, lacinia risus. Nulla erat tellus, auctor vitae rhoncus ut, semper vehicula velit. Vivamus ut nisi urna. Ut fringilla, est ut suscipit interdum, erat tellus tincidunt purus, non feugiat ante erat a lorem.

				Maecenas in ornare augue. Maecenas congue ex nec nulla scelerisque, non convallis felis pulvinar. Nullam nec convallis mi. In hac habitasse platea dictumst. Praesent sed nisl ante. Suspendisse accumsan nisi non ante vulputate, efficitur auctor ex ullamcorper. Nullam blandit justo non justo mollis, quis luctus erat pellentesque. Aliquam ut tempor mauris. Suspendisse efficitur dolor nisi, ut dignissim erat efficitur eu. Suspendisse eget mi enim. Nulla venenatis posuere congue. Sed nunc quam, euismod ac ultricies vel, accumsan sit amet purus. Ut et velit non ex faucibus condimentum eu non neque. Praesent in arcu vulputate, elementum ante vitae, lobortis sapien.

				Nam eget tincidunt elit, vel rhoncus dui. Proin a posuere nisl, sed lobortis mi. Aliquam eros nisl, pharetra vel enim id, posuere aliquam eros. Aliquam feugiat, erat in vulputate rhoncus, velit est scelerisque nisi, vitae commodo sem ex id tortor. In condimentum dolor vulputate viverra condimentum. Nam scelerisque posuere felis, a tincidunt risus egestas at. Nullam non erat eget ligula malesuada varius vel sit amet elit. Fusce porttitor feugiat nibh vel semper. Nunc neque libero, scelerisque porta iaculis nec, sodales sed nunc. Aenean vel nibh eu quam rhoncus pulvinar.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus quam, luctus at tempus ut, vestibulum mattis tellus. Etiam non lectus ut nisi dignissim laoreet vel at est. Nunc nibh urna, interdum eget eros a, hendrerit scelerisque nunc. Nulla a aliquet lacus, id egestas tortor. Suspendisse maximus malesuada justo non sagittis. Cras rutrum sagittis tincidunt. In vitae ante eget orci mattis blandit lobortis et mi. Fusce laoreet eu dolor et aliquam. Sed eleifend odio condimentum nibh bibendum, ac vestibulum tellus ultrices. Nullam porttitor sapien id ligula tincidunt, id aliquet odio sollicitudin. Phasellus ac egestas lorem, quis fermentum tellus. Cras et arcu ut elit malesuada suscipit. Proin quis volutpat sem. Nam ac turpis sit amet ante viverra vulputate eget quis lacus.

				Nulla dictum, lectus at aliquet sodales, arcu arcu ultricies libero, at ullamcorper ante erat nec nibh. Aliquam blandit mauris nec elit interdum placerat. Nunc dignissim dapibus dolor quis vulputate. Morbi sollicitudin volutpat purus et convallis. Nam ornare enim nec elementum cursus. Sed quis urna eu erat commodo tempor aliquet sollicitudin leo. Duis at nisi lectus. Quisque id turpis vel nulla porta pulvinar. Curabitur eu egestas tortor. Donec non eros feugiat, aliquam velit sed, lacinia risus. Nulla erat tellus, auctor vitae rhoncus ut, semper vehicula velit. Vivamus ut nisi urna. Ut fringilla, est ut suscipit interdum, erat tellus tincidunt purus, non feugiat ante erat a lorem.

				Maecenas in ornare augue. Maecenas congue ex nec nulla scelerisque, non convallis felis pulvinar. Nullam nec convallis mi. In hac habitasse platea dictumst. Praesent sed nisl ante. Suspendisse accumsan nisi non ante vulputate, efficitur auctor ex ullamcorper. Nullam blandit justo non justo mollis, quis luctus erat pellentesque. Aliquam ut tempor mauris. Suspendisse efficitur dolor nisi, ut dignissim erat efficitur eu. Suspendisse eget mi enim. Nulla venenatis posuere congue. Sed nunc quam, euismod ac ultricies vel, accumsan sit amet purus. Ut et velit non ex faucibus condimentum eu non neque. Praesent in arcu vulputate, elementum ante vitae, lobortis sapien.

				Nam eget tincidunt elit, vel rhoncus dui. Proin a posuere nisl, sed lobortis mi. Aliquam eros nisl, pharetra vel enim id, posuere aliquam eros. Aliquam feugiat, erat in vulputate rhoncus, velit est scelerisque nisi, vitae commodo sem ex id tortor. In condimentum dolor vulputate viverra condimentum. Nam scelerisque posuere felis, a tincidunt risus egestas at. Nullam non erat eget ligula malesuada varius vel sit amet elit. Fusce porttitor feugiat nibh vel semper. Nunc neque libero, scelerisque porta iaculis nec, sodales sed nunc. Aenean vel nibh eu quam rhoncus pulvinar.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus quam, luctus at tempus ut, vestibulum mattis tellus. Etiam non lectus ut nisi dignissim laoreet vel at est. Nunc nibh urna, interdum eget eros a, hendrerit scelerisque nunc. Nulla a aliquet lacus, id egestas tortor. Suspendisse maximus malesuada justo non sagittis. Cras rutrum sagittis tincidunt. In vitae ante eget orci mattis blandit lobortis et mi. Fusce laoreet eu dolor et aliquam. Sed eleifend odio condimentum nibh bibendum, ac vestibulum tellus ultrices. Nullam porttitor sapien id ligula tincidunt, id aliquet odio sollicitudin. Phasellus ac egestas lorem, quis fermentum tellus. Cras et arcu ut elit malesuada suscipit. Proin quis volutpat sem. Nam ac turpis sit amet ante viverra vulputate eget quis lacus.

				Nulla dictum, lectus at aliquet sodales, arcu arcu ultricies libero, at ullamcorper ante erat nec nibh. Aliquam blandit mauris nec elit interdum placerat. Nunc dignissim dapibus dolor quis vulputate. Morbi sollicitudin volutpat purus et convallis. Nam ornare enim nec elementum cursus. Sed quis urna eu erat commodo tempor aliquet sollicitudin leo. Duis at nisi lectus. Quisque id turpis vel nulla porta pulvinar. Curabitur eu egestas tortor. Donec non eros feugiat, aliquam velit sed, lacinia risus. Nulla erat tellus, auctor vitae rhoncus ut, semper vehicula velit. Vivamus ut nisi urna. Ut fringilla, est ut suscipit interdum, erat tellus tincidunt purus, non feugiat ante erat a lorem.

				Maecenas in ornare augue. Maecenas congue ex nec nulla scelerisque, non convallis felis pulvinar. Nullam nec convallis mi. In hac habitasse platea dictumst. Praesent sed nisl ante. Suspendisse accumsan nisi non ante vulputate, efficitur auctor ex ullamcorper. Nullam blandit justo non justo mollis, quis luctus erat pellentesque. Aliquam ut tempor mauris. Suspendisse efficitur dolor nisi, ut dignissim erat efficitur eu. Suspendisse eget mi enim. Nulla venenatis posuere congue. Sed nunc quam, euismod ac ultricies vel, accumsan sit amet purus. Ut et velit non ex faucibus condimentum eu non neque. Praesent in arcu vulputate, elementum ante vitae, lobortis sapien.

				Nam eget tincidunt elit, vel rhoncus dui. Proin a posuere nisl, sed lobortis mi. Aliquam eros nisl, pharetra vel enim id, posuere aliquam eros. Aliquam feugiat, erat in vulputate rhoncus, velit est scelerisque nisi, vitae commodo sem ex id tortor. In condimentum dolor vulputate viverra condimentum. Nam scelerisque posuere felis, a tincidunt risus egestas at. Nullam non erat eget ligula malesuada varius vel sit amet elit. Fusce porttitor feugiat nibh vel semper. Nunc neque libero, scelerisque porta iaculis nec, sodales sed nunc. Aenean vel nibh eu quam rhoncus pulvinar.
			</PageContainerMain>
		</PageContainer>
	)
}