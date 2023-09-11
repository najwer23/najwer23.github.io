import styled from "styled-components";

export const WeatherStyled = styled.div`
	margin-bottom: 150px;
	padding: 0 20px;

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

	p,
	ul {
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
		margin-bottom: 50px;
	}
`;


export const SelectWrapper = styled.div`
	margin-top: 30px;
	margin-bottom: 30px;
	font-size: 20px;

	@media ${({ theme }) => theme.device.tablet} {
		width: 100%;
	}

	@media ${({ theme }) => theme.device.desktop} {
		width: 400px;
	}
`;

export const ForecastDataCurrent = styled.div`
	width: 250px;
	height: 421px;
	margin-bottom: 20px;
`;

export const ForecastDataStyle = styled.div`
	font-size: 20px;
	display: flex;
	justify-content: space-between;
	width: 250px;
	margin-bottom: 3px;
`;

export const ForecastDataWrapper = styled.div`
	display: flex;
	gap: 60px;

	@media ${({ theme }) => theme.device.tablet} {
		display: block
	}
`;

