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
		src: "https://lh3.googleusercontent.com/nLdjygCJ13E5Ps2Gdxs9JXQAJflxCX9Y2P-B1kZHaE0xmkqU-EGFWVygE62mJGOpFiRDvunev7EPZXFF7_9GDC0FVI8uY2bgA4ffP-zPnrEDlIIs5YzPCleW-nz7ovRkCBSXeh0Yj5wVOf_gGcHTyePj5n_ohJiAZ-5MJMTbnW7Pk7RsVNia9DBhDHyhzS15KOhSzqtnpQ9EPr8Ok77U6281i0yWNzwzmROWgQRZvQEyViR8IQJVFzYwNj8cq0bbS0lKUI0brjacWCZlJZSVv1Cm0LgMDk8d-YB-bxzEJFkrZpOQDkLqntiwNmfowaBumHF8MBsWhGxfudICdxmNn5WdfvSP4ZHTKSY0AvAl9HsbbsemuOPDXW5N13b1qQVO3-qTPxKJYAAT1bH6qbKEWAonzcQw0npyVQKnsEK6SwUKzVcJhxWeI9471qkt2d7dW5AIagghtr9_yDVOYLB0Ak8RWdLuyXwG6GUVekC9mxWmnuW3RKrWMo1wqyvTASjSFBCffKhEz6UNfPHfv5OLWJZtQi7cP-RVL4CkdmUj_ttMdRlQcEeMsCmCMHLW307f9GDeP-Kjj9nU08g6AQZReAaoRAjs00KmGu2sSdDJx-_kg96YonlSwlcLyS1w1gh5ZW4B9vm8jj0Bm_9TSBzb3KyQJqPZ3UDrcvPRhvui72KsLkDZNC81LLtZyDjTST_vpdHtySrlVT3N7af6_sYekA-EMinT9yCScbAYo7OBItlfdkps55nRIe_4bcdAcPHs_qlm2lwMFddJWO8dErfKoxDw1DhqBxUo-DQ2zMorWn3E3ChJPJf8wUOzqlGJwA2PYX4IKjOO6nuGMvQX2G4JCcLWVzPk1jBwSLtnBnF8qRdEcC2MoPDcn519ikBhsFS2HAkx3iBmCRmjzLJy6qZsdVEd1DA-70rorG5nYZpPs3Tc3QJc=w1538-h961-no?authuser=0",
	},
	{
		src: "https://lh3.googleusercontent.com/0ry-wiy_YENxniLEoDj7YqNFlULtWaK5KPnmIdbOvheacJEuncnRGZr2PjcHud5LFXf1gKz3zddP_wKdtYv197z-zXaxv5eiOYW-8mYqARZ0De7wn9-1UgXmsXF4nbqCDdeJfSx00PrP0osKcuiddduX_EkWHTAKCkmi9zACKSjsjg74DfL0L-4JKX7dvAcvN4_hrn1V3Y913IgzfLOqUZBF5V9I82LdqwvoJet2jnQAAlqhvqySbk8Is-i4FK-Uww7nmaiaBpnJMv6-Lfe5mJgROb8VWW_GG52UDHsMv66Y1mFh0qciL33hgnn9Bx5rNxsjRrz6cqpIiYphhgm1xt3YRprYHY4w0u7d3pSPmJVzfb1NUivwHel5cqTJ4HD0a4N0Xo_BhUsUtTPLNv0kAA29nD9JAx-UlHPWwedWNG0qCbLYTEXPqcAIbxJELR5ThvCmXFesxWZH28u6GVTO1rLhDoDF_wwwBrzbF1hNi-DHwv6QxypWoPhuH1p_EnCqPEygsDUzjcae6KUEMRXFJ52jgJovG5oIMxmIgympVB6Xw0xNfPsVfje0m2edf33Kaq3p-4CsIT81nqe5HxVpXzYCngCp3qiWsNoX9oXJ-rKQIGBo4M21JYcxwwA6kADtfFpx4i8gaHurUm1hNosAZ41PJDVj3NZWiwtw3zifFFYSDkJ2O9G1nF0fTqxVnPBt20bXOBbiY0538BFimnqtvYbMY5CPV4q58sGPEo43CnsZ1Ge1dQ_KPrsUsiNEHwC9cfIjTEoy7v-BDGF_DhYNvuZi83byL3fDkc_FRe5BGfm5MEaHEdHObvm4tjeMhlNSOnOhHCw5Rc1pJb8ytkyM4g5y4PHL3oDKu_2lm3UlK6Qya8zINHi_yTp0GmTAoRvB1cLCKVJ5ZzCCPZQbEFtrRmFfsHN-EvYbOylyWp5PYfTWC8AM=w1920-h737-no?authuser=0",
	},
	{
		src: "https://lh3.googleusercontent.com/bKlk5u1S59IzCkZeix8076gGegFZElo9F_S7sFGpueE7pkv_7EbE5MtMXw3MxY3L32kRKs1H5TO-mIrgNPS5WFf_CSjKs9lEHKwGv44MtuRL3Y0YK1VM5q7aPcId_Yrzqjq7eddNpoLWMk0Oyt-4EZ46aS_08GaVNf3nFohb3pDIJ3ElS7sFI8KQg1ReOnZSmzy5A-OypEv2rT1fyv_FGbSro61yodXAqM4u63iJ3Mg5cuCj36HxYUOiKQC-iU7zN2vyQv-mgW4SgCQ9Rad6-nEHrPdRv4FGZ8HPa8VP0V6eTW0YMeQ0-rmVenM3qwCuqI5lEmmWEKhlZ3KbeCT1ZOdVlB3-oeahoBaxbadnpz6CB_MSE6e0xoWcmzsnqq70XWpKPfTECzSnkZEjhwh9c7OemWBsYe_KlvxipxBhWO9lUDgZdXyxvqQ0uxgM-Fv43B0kUk5MvqP8DkodP_b3sF-GiED94v942U1XiIfB4wwJPSFDWlJL8zKeqkCpMqeHT9Wvb_uARpqg6khYTNybKIwBOkQrBkf8P3MYK608zoj8D4iigdEyocAA_g-bTM_Pw2BU6wSMlEy1d5ZC08rx_4EUM1J1O-pYrh-LANp4ZQAmLxtz7SaRN1LjrgB_vBA055CbXUfmqCFn2m_vV-qSnkPIeEuRzLSB2ltIpPZbSlcJnxO8uIHb61jdEuRb9wOfrl0Wi0AeO_Djb3Ia_lqQnuV3jZp45nk3lA_-613eygZ4-ftV0KGZ7XtEJf25Ey3ht8ACzLiEe53UjbuQZ5lGnrl7NU3FMU10ttcqvEf6jyUOyDBKtcuVmP7yVAynUSZMR_-q6LoZmDroS4WxWvoQZE4SP_GXbr8A-iHqbxDrtBhoY0j1sAMsX7T1IeGR4-X3P7O6e7hu0exq6NMeO2KfDbJAewtxCxbjeaamEGI0Ao_HvgXP=w1709-h961-no?authuser=0",
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


