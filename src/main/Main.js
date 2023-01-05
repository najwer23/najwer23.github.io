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
		src: "https://lh3.googleusercontent.com/bSYWxOsGWYRZ0zm_OQ4rNwOrnD_LEpoVxuzjnf-hP6SpAwJ4SFNNYNNTAKL9a8rYDcAgj9H20Ozwx1hExskTA7kbp4yYW7Ri2yycvLOOZHagrvTUZdSeK0pXjpsFJxJuGbXq0aZZWVRYSC2DRkLQSY7FWkP6xWxIoQ-itE2jytqVlgMGWCGFvdi93jSFwus5aJQc_BseG2HKfzKyY451zDWN3YwYON7T9nGbXa2fUo7ryTe5VeHtzUjYxOAbSl1sRAuAG2ENxFcF9D0QLQg4oGa4gYEBxOnmciumvBGJ3JEsXybHnoZ4wvLDoqYY9sPT69FwYk2poqektLSpCVzN7aUk_y3-J-AAF9UKgFpqadPjBMC8s3Liy9Kgt5KC42U5ZmdjHohtPAF6fXKK-DWv47jRsodK8dzuCeYLphv_9T6E14I0l5VleB4s8mS4ZbMcutdfJoasedu7W8jUdhaeBZg_HD1GKjpDqv5HIXmAU9bhO7yPnUZ0cTwfA5NEBkgp8b8fSVKuud7MOZYF-y8a4ZLU1o1onFvD5QG4_HTw8d6ni7BgXto7Dt4WXSYgLWSeeHcT4B-SlwQIwTQTomE9o8IZ4AYYAr5ToFcn3KJvuFtdaYaxDwiXuWT_DrgLsa6iwaOtfQB5ksCQJWu-hsZXMw4jvmXYWWNMZZQT8BqcmeU_ablV5sAwKfylej87OFbMYPcFIUawhl_IZgn2oEmj8CpqfmAWd1b2flVBLjAuAcgU1DmPnruLZ_9SUB91USnFuAaKkJeNSlkjaU2kdY41ANkw0rVOBHoXDCpI8_G-dGPncloyd1o97Mbke73BamcAtoX53bZzj53ASgvRS4NwfpcV7aGCguccJtfnAojbvHpHMvxzGIabuP7U0kwOkM_dZhbcKUS2Tr-Z5Pd7yihbQgGg8dz1gHEfV8236EQ8ar_1XWaF=w1280-h859-no?authuser=0",
	},
	{
		path: "/resume",
		outPage: true,
		title: "Resume",
		src: "https://lh3.googleusercontent.com/fkmfI2kbRbOi3u1rzK0RvUta6GWgGfBrVskAa6d_6cpsqoSrTCMGSkPASnBISxxOsK9_yYHHxuiCX7mwOZwlQMN47dnIPR-pvGS_h-8ryYrxeU1BOItpcY3y1rC_0Iel4-0QqwOsKkhY1JrCp_SFKpjMMKFQCbcRZ-yscDG9h4_-HtsgjeG_iOA1cXyKsEDwR1-quvHOR9m05R6tzH5XSMY6f_4WrI9VD1FrL8_cJ6Jt4AT5IkFNoGkwnN7lTLqey1qp7OVcjIQNpEg-1ERRjdTPfxXG-lJkqmGZsBhIlfxBCvu5Xzf5xHuaz7BbuPROdsLrDf-39aGVYrTkgDeCdrxIHK1_QP2yhLTwPUR5tU8QF83ddMxUF_mp1S7kXtOoL5nrdeHG6x8WameEddmDzvQsgQqrCq-MkWJvmCbozi4DIrWITIpNSSdtH-eoWUsZdAHzhLKVqhhlYHa0tZOfkhQobZWXdJo9cxcZ7JbulGUhcbOv8LEn5duMguBjKNYo7LGr0Os6MFH-FhJeniM1O77WoMOtagsSDZ9-M_r75uU-b-kNKw3eq-kr5pWdkiFX1WkE2fSqoq4gY-GyCk0Y5-cst8_Pin5p1kbemjrXNmTh0uHKcylRzFg7hI2EE2NMmG8Hbu43JTu2gTJzcNPUEMetktTKrR85l92XTzT_9J62Z0HZmROxLOh-R7r8c-be9GPGRCOgjSxCZSk9GvdhQPkM141-6CLAH26RDl2GBj4MbN8UdTgVI1gaQDRYTu7inl_aW_hYAhyTIgUU8G-MiHKFq6e1ls6ArCdCxJt5ujFTjUDQRuvNu_rrHaiU8sIe_gSSRqiq8Ox41p40Cts6u9tqByYFpitI0NyxjylFNdmrB-piXRBIOlIESh8HgyKAy04NibDnl4xWn_JN1K4GyJThsmp_T1a2Zh_d5Ryiu9D2LE0T=w958-h637-no?authuser=0",
	},
	{
		path: "https://jabber-23.ue.r.appspot.com/",
		outPage: true,
		title: "Jabber",
		src: "https://lh3.googleusercontent.com/C4y21gExoXDqXN1UBy-Y2fTl2AtEbCLQHKZWaru1y9TBdieVWfmL6J_G4oeDJcZqMiKAQkOK6gMMNXgLqCTk6uV0M18hkdPBydeQ-uGiUHKwyGvSzSkL1M2C7qlrarx2Vpt4qj-lt6t-yPhB54zHw76NSOeC-9uY_RW8A7ROGNRxaESdM4IUhNF9gv_4d_xkGAfSVZRHZzPm6zcHErTCQiKagX9X_xYNQXLsETjYJcs_Ozb8_2kLXKQwsE-Nijfj6LW68GGOAVfsrIFH3tJgQ3HVTuYC2gGFOLRrVWOE8MF8oC-yzmqHMX1vMh1HbSYGZh76egD6PesBmx2IiupRQLgPj5S4YrXnRyXgc5a5OntmTlJVB--t114Z3JeJfqrpv6jzKYunNrMkTfpfpxycUveb6WJslFqbx-aMQXc8E4mDbhqjWx3acd6HfdE_cPqdRG5HlIlaqjH3EII9Xi4lRy1jG6PE6LdlDEqlwbDaDTDikt2POnXZWlWAEDjoR82-pUMWKsOfYex6xy_fOhms2l9C3duj3h9beTmB9ZYz99uaeDzikbk36UKGWl9ZqExENa2qgG3R5LrFqZUbFdQxrwerp5D5GX0KQrb5Sxg86sK1ocxcqM86Bq4GAr7Ut_iptBsuP0pJo0L7MTN7kY3z6Zz7cUEgqUYq3UKeBaEYSq3bFC4Wq-Uy800VU9or3qGNfYaniv59y5Dh4dhnVpe0ywqNbXMd1QviObkBt0_LFrjBnsiKrAf0nwcJwJnFCGUxfP9fd0-1OElDK6Z2EJaIZR7kqXpob6XwZ8JZTS9W224a302H6arWU99guJOLZXQgnhGdNie1QRAlb_0HLtCCGJOO-LKPEjkZXtF9lTxr_Am21X7_3MYFK98-Lgsc5po5AHgUrKMTgmrgxgiiPmIo_FhEZSmPtWs-k1PnDTcCG2CHRucL=w1920-h870-no?authuser=0",
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


