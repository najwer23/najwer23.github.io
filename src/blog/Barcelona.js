import Footer from "../footer/Footer";
import Header from "../header/Header";
import Section from "../section/Section";
import "./blog.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default function Barcelona() {
	return (
		<>
			<Header />
			<Section content={<Post />} />
			<Footer />
		</>
	);
}

function Post() {
	return (
		<>
			<section className="blog">
				<section className="blog-txt">
					<div className="breadcrumbs">
						<Link to={"/"} className="noselect">
							Strona główna
						</Link>{" "}
						/{" "}
						<Link to={"/blog"} className="noselect">
							Blog
						</Link>{" "}
						/
					</div>
					<header>
						<h1>Barcelona. Duma Katalonii</h1>
						<h2>25.09.2022</h2>
					</header>

					<article>
						<p>
							Barcelona to miasto położone w północno-wschodniej części
							Hiszpanii niedaleko Pirenejów i granicy hiszpańsko-francuskiej.
							Szacuje się, że obecnie w Barcelonie zamieszkuje około 1.62 mln
							osób. Miasto ma dostęp do Morza Śródziemnego, a w samej stoczni
							przez parę królewską był witany Krzysztof Kolumb wracający z
							wyprawy do Indii. Aura podzwrotnikowa sprawia, że mamy tutaj
							łagodne zimy i ciepłe lata. Swój początek istnienia miasto
							zawdzięcza Fenicjanom, którzy osiedli tutaj w III w p.n.e. Dziś
							miasto uznawane jest za potęgę gospodarczą kraju i stanowi 20% PKB
							Hiszpanii. Mimo, że Barcelona to międzynarodowe centrum turystki,
							bo odwiedza ją 8 mln. osób rocznie, to mamy też tutaj wysoko
							rozwinięty przemysł motoryzacyjny, chemiczny i spożywczy. Miasto
							jest ogromne, posiada metro o łącznej długości 123 km. Poruszanie
							się po aglomeracji jest naprawdę łatwe, chociaż trochę męczące.
						</p>
					</article>

					<article>
						<p>
							W Barcelonie każdy znajdzie coś dla siebie. Cudowna kuchnia,
							soczysta Sangria, widowiskowe wydarzenia sportowe na Camp Nou,
							światowej klasy architektura, czy wypoczynek na piaszczystych
							miejskich plażach.
						</p>
					</article>

					<article>
						<p>
							Osobiście najbardziej spodobała mi się atmosfera jak panuje w
							mieście. Radosne spotkania w przyulicznych knajpach. Szalone noce.
							Zaskakująca turystyka za dnia.
							<br />
							<br />
							Miejsc do zwiedzenia jest naprawdę sporo. Niesamowita gratka dla
							miłośników urbanistyki. Gaudi naznaczył miasto secesją do końca
							kolejnego stulecia. Jego Sagrada Familia jest wciąż nie ukończona,
							ale zachwyca już teraz. Połączenie alegorii, natury i matematyki
							jest niesamowite. Wchodząc do świątyni czuje się naturalny spokój
							wywołany rozmachem i detalami. Gdziekolwiek spojrzysz jest
							nawiązanie do życia Chrystusa. Czasem bezpośrednio w postaci
							rzeźb, a czasem za pomocą matematyki w postaci magicznego kwadratu
							lub stałych proporcji między elementami. Wszystko jest wygięte
							albo zaokrąglone, bo krzywizna jest bardziej naturalna i bliższa
							Bogu. Najbardziej zadziwia fakt, że elementy, które wykonał sam
							Gaudi odstają jakością od tego, co wykonuje się obecnie z pomocą
							sztabu architektów i oprogramowania.
						</p>
					</article>
				</section>

				{/*  */}

				<section className="blog-media">
					<header>
						<h1>Multimiedia</h1>
					</header>

					<section className="multimedia">
						<header>Barcelona na mapie</header>

						{/* https://github.com/najwer23/antoni-gaudi/blob/master/assets/js/leaflet.js */}
						{/* http://leaflet-extras.github.io/leaflet-providers/preview/ */}
						<MapContainer
							center={[41.387917, 2.169919]}
							zoom={12}
							maxZoom={18}
							scrollWheelZoom={false}
						>
							<TileLayer
								attribution=""
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
							<Marker position={[41.387917, 2.169919]}>
								<Popup>
									Barcelona!
								</Popup>
							</Marker>
						</MapContainer>
					</section>

					<section className="multimedia">
						<header>Camp Nou</header>

						<img src="https://lh3.googleusercontent.com/pw/AL9nZEXu33lYA-ND2u3Q46L6qilKpcO8WJJT7-leOStM3qDYAZ7rVuzhGsikiUJ0Jr2F38i8F7KdVUp6fO-N0RytVlLjtrhRzCfmlrJ8swU34v2AlmX-VfO4OGRk4NUvkanOBxLtrqK1u7vTexdNDBnBJlDd=w537-h403-no?authuser=0"></img>
					</section>

					<section className="multimedia">
						<header>Sagrada Familia</header>

						<img src="https://lh3.googleusercontent.com/pw/AL9nZEVtR9QqyDQyDqhXanoMnxhByc3CFAZ004VPJelGyLDbPPIocpAtBNknzDwhI9pRvzBQ0ump_IF0dMo36RIS4Spcn0Ic6pY3r5Ok0D8y5bPw_GNh2evbsFgPqcebUUtsMYzC9mIKuNBajTsakGwufBp3=w582-h800-no?authuser=0"></img>
					</section>

					<section className="multimedia">
						<header>Sagrada Familia - magiczny kwadrat</header>

						<img src="https://lh3.googleusercontent.com/pw/AL9nZEUQ5JZaznydnjVep-Y_PqTIpD8By18toYYeftYwKwm1vITqrBD9MCSnTL8jXQeYgSh3fjFoUNEyEi0WRlbbYAwhxjZHvsmWX43M3LSVhP21joyfomycuogJhhMURMtdNwpek0afB1UwIw6a8Im_EDtY=w1024-h488-no?authuser=0"></img>
					</section>

					<section className="multimedia">
						<header>Sagrada Familia - wnętrze</header>

						<img src="https://lh3.googleusercontent.com/pw/AL9nZEX3mO5-iGhprZ5aaP6DuZ0TTvUvmXyDCnhBP15YcVs6HC_Kk1BgI1meLFjCAw_PPT3-GxAw40FBEchgMJsxkszoWouaqNk-voVqyAVk0vE6lsFmC89ocCK9Q6Ios0HZMD6hvtRp3ON01pu5gnP3d8Jt=w596-h912-no?authuser=0"></img>
					</section>

					<section className="multimedia">
						<header>Sagrada Familia - na zewnątrz</header>

						<img src="https://lh3.googleusercontent.com/pw/AL9nZEXWpJikMbx7dBOxeT-JaMQUbel5nFuBBjbIDlnLj1uLKHngnCbpnuzJ2AQUs2JWN_VA9HwUSVvHyA1JX-M_jvn9nsjCaM0WX90PD4yiVlz26f3mkthXabL4rGbdH7uf06se2PFX78gIZypwH4VYmXkX=w730-h912-no?authuser=0"></img>
					</section>
				</section>
			</section>
		</>
	);
}
