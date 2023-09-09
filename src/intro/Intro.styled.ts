import styled from "styled-components";

export const IntroStyled = styled.div`
	max-width: 1000px;
	margin-bottom: 150px;

	h1 {
		font-size: 72px;
		margin-top: 0;
		margin-bottom: 0;
		line-height: 115%;
		text-wrap: balance;
	}

	h2 {
		font-size: 42px;
		color: #0d0d0d;
		text-wrap: balance;
	}

	h3 {
		max-width: 900px;
		font-size: 32px;
		color: #0d0d0d;
		text-wrap: balance;

		@media ${({ theme }) => theme.device.tablet} {
			padding-bottom: 0;
			margin: 0;
		}
	}

	p, ul {
		max-width: 900px;
		font-size: 22px;

		@media ${({ theme }) => theme.device.tablet} {
			font-size: 20px;
		}
	}

	ul li {
		margin: 15px 5px;
	}

	@media ${({ theme }) => theme.device.tablet} {
		padding: 0 20px;
	}
`;

export const SocialMedia = styled.div`
	margin-bottom: 100px;
	span {
		font-size: 42px;
		margin-right: 20px;
	}
`;