import styled, { css } from "styled-components";

const hamburger = css`
	padding: 5px 10px;
	cursor: pointer;
`;

const arrow = css`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	cursor: pointer;
	border: 1px solid black;

	&:hover {
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
	}
`;

const standard = css`
	padding: 10px 20px;
	cursor: pointer;
	border: 1px solid black;
	font-size: 16px;
	font-weight: 700;
	background-color: white;

	&:hover {
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
	}
`;

export const ButtonStyle = styled.div<{ $styled?: string }>`
	button {
		${(props) => props.$styled === "hamburger" && hamburger};
		${(props) => props.$styled === "arrow" && arrow};
		${(props) => props.$styled === "standard" && standard};
	}
`;

