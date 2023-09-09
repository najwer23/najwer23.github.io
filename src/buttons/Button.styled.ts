import styled, { css } from "styled-components";

const hamburger = css`
	padding: 5px 10px;
`

export const ButtonStyle = styled.div<{ $styled?: string }>`
	button {
		${(props) => props.$styled == "hamburger" && hamburger};
	}
`;

