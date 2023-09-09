import styled from "styled-components";

const asideWidth = "320px";

export const PageContainer = styled.div``;

export const PageContainerAside = styled.aside<{ $isMenuOpen: boolean }>`
	width: ${asideWidth};
	position: fixed;
	height: 100%;
	padding: 20px;
	overflow: auto;
	display: ${(props) => (props.$isMenuOpen ? "block" : "none")};

	@media ${({ theme }) => theme.device.tablet} {
		width: ${(props) => (props.$isMenuOpen ? "100%" : asideWidth)};
		display: ${(props) => (props.$isMenuOpen ? "block" : "none")};
		z-index: 100;
		background-color: ${({ theme }) => theme.colors.surface1};
		overflow: auto;
		padding-bottom: 100px;

		button {
			margin-bottom: 20px;
		}
	}
`;

export const StyledNavLink = styled.div<{ $current?: boolean }>`
	font-size: 24px;
	padding: 5px 5px 5px 0;
	text-decoration: ${(props) => (props.$current ? "underline" : "none")};

	a {
		text-decoration: none;
		padding: 5px 5px 5px 0;
		font-weight: bold;
		color: black;
	}
`;

export const MobileHam = styled.div<{ $isMenuOpen?: boolean }>`
	position: ${(props) => (props.$isMenuOpen ? "" : "fixed")};
	top: ${(props) => (props.$isMenuOpen ? "" : "20px")};
	left: ${(props) => (props.$isMenuOpen ? "" : "20px")};

	@media ${({ theme }) => theme.device.tablet} {
		display: block;
	}

	@media ${({ theme }) => theme.device.desktop} {
		display: none;
	}
`;

export const PageContainerMain = styled.main`
	margin-left: ${asideWidth};
	width: auto;
	overflow: auto;
	padding-top: 20px;

	@media ${({ theme }) => theme.device.tablet} {
		margin-left: 0;
		padding-top: 75px;
	}
`;

export const PageNav = styled.nav``;


