import { useEffect } from "react";
import "./Carousel.css";

export default function Carousel(props) {
	const TITLE = props.title;
	const ITEMS = props.arr;

	useEffect(() => {
		let carouselId = `#${props.id}`;

		var carouselDataIn = {
			[carouselId]: {
				isMousedownActive: false,
				isMousemoveActive: false,
				translationX: 0,
				mouseStartX: 0,
				oneLenghtOfSlider: 0,
				oneFrameDisplayed: 0,
				hiddeArrowOnWidth: 600,
			},
		};

		if (document.querySelector(carouselId)) {
			calculateWidthForCarousel(carouselId);
			addMouseEventsToSlider(carouselId);
			window.addEventListener("resize", carouselResize);
		}

		function carouselResize() {
			calculateWidthForCarousel(carouselId);
			stateArrows(carouselId);
		}

		function calculateWidthForCarousel(elementName) {
			let carousel = document.querySelector(elementName);
			carouselDataIn[elementName].oneFrame = window.innerWidth < 600 ? 300 : 400;
			carouselDataIn[elementName].oneFrameDisplayed = carousel.parentElement.offsetWidth;
			carouselDataIn[elementName].oneLenghtOfSlider = 0;
			document.querySelectorAll(elementName + " .carousel-item").forEach((x) => {
					x.style.width = carouselDataIn[elementName].oneFrame + "px";
					carouselDataIn[elementName].oneLenghtOfSlider += carouselDataIn[elementName].oneFrame;
				});
		}

		function stateArrows(elementName) {
			const carousel = document.querySelector(elementName);
			const carouselContainer = carousel.parentNode;

			let AL = carouselContainer.querySelector(".carousel-arrow.left");
			let AR = carouselContainer.querySelector(".carousel-arrow.right");

			if (window.innerWidth < carouselDataIn[elementName].hiddeArrowOnWidth) {
				AL.style.display = "none";
				AR.style.display = "none";
				return;
			}

			let a = carouselDataIn[elementName].oneLenghtOfSlider;
			let b = carouselDataIn[elementName].oneFrameDisplayed;
			let t = carouselDataIn[elementName].translationX;
			AL.style.display = "block";
			AR.style.display = "block";

			// left bound
			if (t >= 0) {
				AL.style.display = "none";
			}

			// right bound
			if (t <= -a + b) {
				AR.style.display = "none";
			}
		}

		function addMouseEventsToSlider(elementName) {
			const carousel = document.querySelector(elementName);
			const carouselContainer = carousel.parentNode;
			stateArrows(elementName);

			const preventClickOnDrag = (e) => {
				e.preventDefault();
				e.stopImmediatePropagation();
			};

			const pointerEventToXY = function (e) {
				var coordinates = { x: 0, y: 0 };
				if (e.type.includes("touch")) {
					coordinates.x = e.changedTouches[0].pageX;
					coordinates.y = e.changedTouches[0].pageY;
				} else if (e.type.includes("mouse")) {
					coordinates.x = e.pageX;
					coordinates.y = e.pageY;
				}
				return coordinates;
			};

			carouselContainer.addEventListener("click", function (e) {
				if (e.target.closest(".carousel-arrow.right")) {
					nextPicture();
				}
				if (e.target.closest(".carousel-arrow.left")) {
					prevPicture();
				}
			});

			function prevPicture() {
				if (!detectIfTranslationIsPossible()) {
					return;
				}

				let b = carouselDataIn[elementName].oneFrameDisplayed;
				let c = carouselDataIn[elementName].translationX;
				let d = carouselDataIn[elementName].oneFrame;
				let t = 0;

				// translation left
				t = c + b;

				// align to next object
				let h = b % d;
				t = t - h;

				// left bound
				if (t >= 0) {
					t = 0;
				}

				carousel.style.scrollBehavior = "smooth";
				carousel.scrollLeft = -t;
				carouselDataIn[elementName].translationX = t;
				stateArrows(elementName);
			}

			function nextPicture() {
				if (!detectIfTranslationIsPossible()) {
					return;
				}

				let a = carouselDataIn[elementName].oneLenghtOfSlider;
				let b = carouselDataIn[elementName].oneFrameDisplayed;
				let c = carouselDataIn[elementName].translationX;
				let d = carouselDataIn[elementName].oneFrame;
				let t = 0;

				// translation right
				t = c - b;

				// align to next object
				let h = b % d;
				t = t + h;

				// right bound
				if (t < -a + b) {
					t = -a + b;
				}

				carousel.style.scrollBehavior = "smooth";
				carousel.scrollLeft = -t;
				carouselDataIn[elementName].translationX = t;
				stateArrows(elementName);
			}

			function addListenerMulti(el, s, fn) {
				s.split(" ").forEach((e) => el.addEventListener(e, fn, false));
			}

			function detectIfTranslationIsPossible() {
				let a = carouselDataIn[elementName].oneLenghtOfSlider;
				let b = carouselDataIn[elementName].oneFrameDisplayed;
				return a > b;
			}

			//firefox bug fix
			carousel.querySelectorAll(".carousel-item").forEach((item) => {
				item.addEventListener("mousedown", (e) => e.preventDefault());
			});

			carousel.addEventListener("scroll", function (e) {
				if (!detectIfTranslationIsPossible()) {
					return;
				}
				carousel.style.scrollBehavior = "initial";
				carouselDataIn[elementName].translationX = -this.scrollLeft;
				stateArrows(elementName);
			});


			addListenerMulti(carousel, "mousedown", function (e) {
				carousel.style.scrollBehavior = "initial";
				carouselDataIn[elementName].isMousedownActive = true;
				carouselDataIn[elementName].isMousemoveActive = false;
				carouselDataIn[elementName].mouseStartX = pointerEventToXY(e).x;
				carousel.style.transition = "none";
			});

			addListenerMulti(carousel, "mouseleave", function (e) {
				carousel.style.scrollBehavior = "initial";
				carouselDataIn[elementName].isMousedownActive = false;
			});

			addListenerMulti(carousel, "mouseup", function (e) {
				carousel.style.scrollBehavior = "initial";
				carouselDataIn[elementName].isMousedownActive = false;

				if (carouselDataIn[elementName].isMousemoveActive) {
					carousel.addEventListener("click", preventClickOnDrag);
				} else {
					carousel.removeEventListener("click", preventClickOnDrag);
				}

				carouselDataIn[elementName].isMousemoveActive = false;
			});

			addListenerMulti(carousel, "mousemove", function (e) {
				carousel.style.scrollBehavior = "initial";
				if (!carouselDataIn[elementName].isMousedownActive) {
					carouselDataIn[elementName].isMousemoveActive = false;
					carousel.removeEventListener("click", preventClickOnDrag);
					return;
				}

				if (!detectIfTranslationIsPossible()) {
					return;
				}

				if (carouselDataIn[elementName].isMousedownActive) {
					e.preventDefault();

					let a = carouselDataIn[elementName].oneLenghtOfSlider;
					let b = carouselDataIn[elementName].oneFrameDisplayed;
					let c = carouselDataIn[elementName].translationX;
					let t = 0;

					carouselDataIn[elementName].isMousemoveActive = true;
					t =
						(pointerEventToXY(e).x - carouselDataIn[elementName].mouseStartX) *
							1 +
						c;

					// left bound
					if (t > 0) {
						t = 0;
					}

					//right bound
					if (t < -a + b) {
						t = -a + b;
					}

					carousel.scrollLeft = -t;
					carouselDataIn[elementName].translationX = t;
					carouselDataIn[elementName].mouseStartX = pointerEventToXY(e).x;
					stateArrows(elementName);
				}
			});
		}

		return () => window.removeEventListener("resize", carouselResize);
	}, []);

	return (
		<>
			<section className="carousel-section">
				<div className="carousel-title">{TITLE && <h2>{TITLE}</h2>}</div>
				<div className="carousel-wrapper">
					<div className="carousel-container">
						<div id={props.id} className="carousel-content">
							{ITEMS &&
								ITEMS.map((v, i) => (
									<a
										key={i}
										href={v.path}
										target={"_blank"}
										rel="noreferrer"
										title={v.title}
										className="carousel-item"
									>
										<span>{v.title} </span>
									</a>
								))}
						</div>

						<div className="carousel-controls">
							<div className="carousel-arrow left">
								<div className="carousel-arrow left arrow-text">
									<div className="arrow-n-left"></div>
								</div>
							</div>
							<div className="carousel-arrow right">
								<div className="carousel-arrow right arrow-text">
									<div className="arrow-n-right"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}