import { Grid } from "../grid/Grid"
import { Intro } from "../intro/Intro"

export const RoutHomepage = (): JSX.Element => {
	return (
		<>
			<Grid>
				<Intro/>
			</Grid>
		</>
	)
}