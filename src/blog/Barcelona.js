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
						<Link
							to={"/"}
							className="noselect"
						>
							Strona główna
						</Link>
						{" "}
						/
						{" "}
						<Link
							to={"/blog"}
							className="noselect"
						>
							Blog
						</Link>
						{" "}
						/
					</div>
					<header>
						<h1>Barcelona. Duma Katalonii</h1>
						<h2>25.09.2022</h2>
					</header>
					<article>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
					</article>

					<article>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
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
									A pretty CSS3 popup. <br /> Easily customizable.
								</Popup>
							</Marker>
						</MapContainer>
					</section>
				</section>
			</section>
		</>
	);
}