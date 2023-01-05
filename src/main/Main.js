import Footer from "../footer/Footer";
import Header from "../header/Header"
import Section from "../section/Section";
import GridTemplate from "../grid/GridTemplate";
import Carousel from "../carousel/Carousel";
import Slideshow from "../slideshow/Slideshow";

const HOME = [
	{
		path: "/blog",
		title: "Blog",
		src: "https://lh3.googleusercontent.com/pw/AL9nZEWe9IyE5NsLyOrR1v2oa0vs5m19i9Lzfvcjsk0k7yfUZQr9hUDpyWyfNDzK87JUSForeOcbBLKbRNorl0kjUuGrm2ts47lAwEpQGDwcOsATW1IdW0xmzXlVWglrCZGlqhrOm9vrBvXAG_KhbMxHhCFv=w1280-h859-no?authuser=0",
	},
	{
		path: "/resume",
		outPage: true,
		title: "Resume",
		src: "https://lh3.googleusercontent.com/pw/AL9nZEW5vXsca7XGPfpGFEa6hfIzDzEJcDXon0tzpFNkvdBjtseAdG38M3CQkKPNnNppZdBhOzeHQ9eI5OllspWoJVDKpSRCQK8xegInSY2EDcRzMM0XqvnLptCEfSoyZbFWhV2VSx-znwzus7ADsRiE6kwL=w1280-h851-no?authuser=0",
	},
	{
		path: "https://jabber-23.ue.r.appspot.com/",
		outPage: true,
		title: "Jabber",
		src: "https://lh3.googleusercontent.com/pw/AL9nZEUuMSoEFBbWAPR_-2I0Qf1RSTSLPw3La7oexoXfDnhmHTuYH1n9-LkcFDROMKC28VVCZRCMAc7QL_ZDLr9qTGMGBoZErnPXPJM6oJmf3peJLklXYrHQOzLfTcZU1RniYhDMnYTh3ypVFtZqEovJcT5O=w1920-h870-no?authuser=0",
	},
];

const GUI_CAROUSEL = [
	{
		path: "https://najwer23.github.io/gui-challenge/carousel-list/",
		title: "Carousel",
	},
	{
		path: "https://najwer23.github.io/gui-challenge/slideshow/",
		title: "Slideshow",
	},
	{
		path: "https://najwer23.github.io/gui-challenge/video-player/",
		title: "Video Player",
	},
	{
		path: "https://najwer23.github.io/gui-challenge/scrollbar",
		title: "Scrollbar",
	},
	{
		path: "https://najwer23.github.io/gui-challenge/masonry-grid/",
		title: "Masonry Grid",
	},
	{
		path: "https://najwer23.github.io/gui-challenge/email-html/",
		title: "Email HTML",
	},
	{
		path: "https://najwer23.github.io/gui-challenge/carousel-one-slide/",
		title: "Slider",
	},
];


const SLIDESHOW = [
	{
		src: "https://lh3.googleusercontent.com/h1-BZa_dvMbCLCu2vpM1K1E1wUJL8SRxyUZO3p3mWXk35qrzzDzKTwHcdqLNUBVBEnZ9Fz-BpDUmiWy5-msSPRtEEgIF1JfdR7dtgQM-7xGPz5clqlVa2uX3QjLP7obiF46p8xo-FRLVHADZwX9fQU9s6Pv6P9t5kuMU98BZ0T0A9NNnR5dF0XeUacEbrgiRGZoJU-MqBoEYaelSrqa8tPExL2RzcE8ANG5D74Lx3tp-gXDvLmNVsCm-X-fKhPH4KzJRUzJPCh5aoX5-uBUw1anxRFDOJyRHKIWYzh3W8c4QYHeQ4oIyx98pytRvJcmRoO0PF6WTpcA4LO1RT2leCfxkdZLrT8yZz2z2pUkg88Z_uxmLteJezP4utjXQfuhQxdguF1h_Buea_rI5PO38TuqyUnV7nZG-EPWlFbe117rLenaoF2tMPibJ6jzASrbZk5nebdqnrc2H9AZH_SQneBA-whZd8Jnh0J_EQaduTprJBEEIwq19aCxucJ2MrH41zWlmleK6Eb7jHoeTg-aHo3z01VMZ885rbb5lzCS8Q6UneZSvI9h3qODdCnLgyoJRaqT1TJfpJnGdITUceG5RUaSUMzprSAB96xlrVS311_Y8N0fF9ocyoysIi8rJrubclY-4pfJw0t69Wu53v_5eUjTmHg-cLddJ-bNFgMRaZ8G6oYX36ghB308RhHJzqiGn1PJcBut69Sz35JuXxGzsWf5WXdPt8ARbPsagDXunnBKDyC40_8sQDHUqhbWlstjVqWUdwlvSexEcuAS1j1k1S0B67rz3jf1OgciwFLQsShSuxjrUzH_YeskGrc5ntlO02WoC_98mshTWpH38ybJXUp1vQ4tE-gaQBhCiL5h8YIOz37grTx0eysBi1YV6rAE6Fk7NIHdv6RC2usDwofV06SaaFiCkDQcdrrG_KgLFR-zD_rbs=w1447-h904-no?authuser=0",
	},
	{
		src: "https://lh3.googleusercontent.com/us-b6v-WQpfyGlMWNz72um-Bpr8o3JySzo5lSjMu2IRW_P6O2u670tJBqSZvcm_qIy2uV_Ly6xez1NHBmbKpKo5n1Lw53tuz3KBX_H8BFN0Ri4-l8KkcrWerie8mBXJeZkoLHvy3tKmXgCDpXm9EFea7hc4NgJpAPswOPUmIbtz74pE1qUdoMZB_1gXSxwatqyXgs8XuO_7StLB-CR5c7tUKHWB4xNweYjqE8xzyNnUO6ULGbjrus6zWk7cnhe5OjSwCpxWtW9ASIklgUyBuFDxl8qd-N8Jnr-XPV7_ko214-GB5aaKih14PXbISD7lfCFv9ISu3YLV-vM1gpEQygvnwhRluGAyEru0pHmi7g5rHDvM-G8Rsbw1o-ODSP_0prfaQdGkHUCXJKlYdHcg9o6pPaV_-cxZrvGnvYc0VOHzssHb2kkk_z6SSgzNDfkx7FsP5DIKEI0nWx_bovXdVqCU-cAOeAJrI59r3Cj8O9uiH0XkfBM1AhcexAoiouk8GxTgw9xac8PLKeIqO8V5A1i40d5K8qGYPJU2tNM9CsHABVBle9OpOouIChfP5Hbjyt34hWE0N2GWp4VI7BYdjE6Z1SBu_jcoHDwAWxxyhhWKJwkYPcvyBNxRxuBb47yrRpiHJ9vOQ5f61G-EVPQp7mu1uZ_YXUtrkzVAP3-x4LFT3Y7lchiwBrqixb3Njf86jQC6mjYHcquCfLZvPlDzuWBSOjUuYVzlhWFORZn3hncgR9bnyviqua2kciuj86syZ8Y0Diuu9LV4rinrCSxPiNmHeuyr5weuCCUAsmjwiYtP6wRUTFiTCRW7YJJON-kCwMywfqIgq5hVz8CfOpXKLCPD8w_rkI7Ebsy1PZJ30Rzoi9rztn-oeijxghjbG5Wz5BqKB5d1Bw10ms9cXUhCRqralgD8PCCEaPJB-p0L4P-PTdW0b=w1920-h737-no?authuser=0",
	},
	{
		src: "https://lh3.googleusercontent.com/tzujnYRmWd8xCGbu9Cry57-b6nvS7rDPu7zM_GJDR2hc1a7UAdLoAMGJKtX3R_Pv6Lhe0Ny4M-7ZYMdCPI1pRo94djluEwdkFjmEkQnmUC79syPtq-TOOE-Vtemt8o-jsIKa2CfU0dZewZBZzMfH296lqndgf8S4CjJXfZx90Hh69s5LcLFF6TY6uV-Aouzt9l9nzV_ew1j2xuuFw7S1dVevgfY_XcUWIXrI0TgUhES429WXwpBz0lzuDzl93f8-SvLDntLeKPsHNk6D0eoXorKnQtIDhadL_G6oMMkHtWbX5MnXojWaKVUh-MnzF9brc88gbticu1Fcd4-lmzpcce7FBBSnY2Smw0Zc9uIBNOGxfszg9hP2dHcIokHsLP9Wg3viQQ06h2lCkI36g4U8-4fuhgK7ReHzQFdmWka5Ib7lEnXonICuLlDtS5dlUyIQNNZbs-aFUXAfiaYxIAXWoGr3ybJGPNACLTnr0krbt3qXXw1AqMKr15r4wSiT1qjMo4qrRy3Bo6EKNezcg40FkaAVb07yUKMZDTKDdVA6LOSYo1y6SDWAGekAwoSko1xyG_mK4bPzjVh8GGoL3naMAPKciuIy_n3mnmi7ZQD5NBjE84Ew23Q4MX_8eei4ZsLcudN5bjz_hcCg4wypJqeZrfWYd6FbgNFCfAKb64oZte20flFe5fAyP6yLB_H8L19ff9pDUnNLcY-IPI2FUHdRN_xnh-i2sE7CafCPuayknALPwbvPTlSrVKbzh3ipb2w6aKf4ahitUwXs-8e2sj8bMjv8YesLYDgNbTv92UIvSl9emDVW6kCihaINODt3efgQ6b-BlVArRNmJAwPQjdi56P1G3XyRtbAXWDtGxilGe6w5ZAoKgElEFi0hEc-K-iA_OE94KXaxvHLXHC0w7oZ5F6aisAkd5x07nSpQWaaiM2X-sVsO=w1608-h904-no?authuser=0",
	},
];

export default function Main() {
	return (
		<>
			<Header />
			<Section content={<GridTemplate arr={HOME} title="Shortcuts" />} />
			<Carousel title="GUI Snippets" id="carousel1" arr={GUI_CAROUSEL} />
			<Section
				content={
					<Slideshow arr={SLIDESHOW} id="slideshow1" title={"FAV Landscape"} />
				}
			/>

			<Footer />
		</>
	);
}


