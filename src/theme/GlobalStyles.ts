import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		/* Include the content box as well as padding and border for precise definitions */
		box-sizing: border-box;
		-moz-box-sizing: border-box;
	}

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.font};
		font-style: normal;
  	font-weight: 400;
		background-color: ${({ theme }) => theme.colors.surface1};
		font-size: ${({ theme }) => theme.colors.bodyFontSize};
	}

	body.menu-open {
		overflow: hidden;
	}
`;

export default GlobalStyle;
