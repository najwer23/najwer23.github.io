const Links = {
	"tel:+48519792189": <>+48{'\u00A0'}519{'\u00A0'}792{'\u00A0'}189</>,
	"mailto:najwer23@live.com": "najwer23@live.com",
	"https://najwer23.github.io/": "https://najwer23.github.io/",
};

export default function PageIntro() {
	return (
		<>
			<div className="intro">
				<div className="intro-title">
					<div className="intro-title-name"><b>Mariusz</b> Najwer</div>
					<div className="intro-title-desc"><b>JavaScript Developer</b></div>
				</div>
				<div className="intro-links">
					{Object.keys(Links).map((v, i) => (
						<div className="intro-link" key={i}>
							<a key={i} href={v} rel="noreferrer" target="_blank">
								{Links[v]}
							</a>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
