import { FlexboxCards } from "../flexboxCards/FlexboxCards"
import { Footer } from "../footer/Footer"
import { Nav } from "../nav/Nav"
import { Intro } from "./Intro"

export const Homepage = () : JSX.Element => {
	return (
		<>
			<Nav />
			<Intro />
			<FlexboxCards />
			<Footer />
		</>
	)
}

