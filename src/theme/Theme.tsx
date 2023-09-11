import { ThemeProvider } from "styled-components";
import {
	light,
} from "./Theme.styled";
import GlobalStyle from "./GlobalStyles";

interface Props {
	children: React.ReactNode
}

export const Theme = ({ children }: Props): JSX.Element => {
	return (
		<ThemeProvider theme={light}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	)
}