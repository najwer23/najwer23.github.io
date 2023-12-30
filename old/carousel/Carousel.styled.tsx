import styled from "styled-components";

export const CarouselStyled = styled.div`
	display: flex;
	gap: 60px;
	flex-wrap: nowrap;
	overflow-x: scroll;
	margin-bottom: 20px;
	scroll-behavior: smooth;

	/* hide scrollbar */
	scrollbar-width: none;
	-ms-overflow-style: none;
	-webkit-overflow-scrolling: touch;
	&::-webkit-scrollbar {
		display: none;
	}

	& > * {
		flex-shrink: 0;
	}
`;

export const CarouselWrapper = styled.div`
	display: grid;
	position: relative;
`;

export const ArrowLeft = styled.div<{ $showArrow?: boolean }>`
	position: absolute;
	top: calc(50% - 25px);
	left: 20px;
	display: ${(props) => (props.$showArrow ? "block" : "none")};

	@media ${({ theme }) => theme.device.mobile} {
		display: none;
	}
`

export const ArrowRight = styled.div<{ $showArrow?: boolean }>`
	position: absolute;
	right: 20px;
	top: calc(50% - 25px);
	display: ${(props) => (props.$showArrow ? "block" : "none")};

	@media ${({ theme }) => theme.device.mobile} {
		display: none;
	}

`