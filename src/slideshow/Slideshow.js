import { useEffect } from "react";
import "./Slideshow.css";

export default function Slideshow(props) {
	const SLIDES = props.arr;
	const SLIDESHOW_ID = props.id;
	const TITLE = props.title;


	useEffect(() => {
		var slideshow = document.getElementById(SLIDESHOW_ID),
			slideshowSlides = document.getElementById(SLIDESHOW_ID+"-slides"),
			slideshowPrev = document.getElementById(SLIDESHOW_ID+"-prev"),
			slideshowWrapper = document.getElementById(SLIDESHOW_ID+"-wrapper"),
			slideshowNext = document.getElementById(SLIDESHOW_ID+"-next"),
			resizeTimer,
			posInitial,
			slidesArr = slideshowSlides.getElementsByClassName(SLIDESHOW_ID+"-slide"),
			slidesLength = slidesArr.length,
			firstSlide = slidesArr[0],
			lastSlide = slidesArr[slidesLength - 1],
			cloneFirst = firstSlide.cloneNode(true),
			cloneLast = lastSlide.cloneNode(true),
			index = 0,
			allowShift = true;

		// Clone first and last slide
		slideshowSlides.appendChild(cloneFirst);
		slideshowSlides.insertBefore(cloneLast, firstSlide);
		slideshowWrapper.classList.add("loaded");

		var WIDTH = window.innerWidth;
		var INITWIDTH = 0

		function updateWidthForSlider() {
			if (WIDTH != window.innerWidth || INITWIDTH == 0) {
				index = 0;

				document.body.classList.add("resize-animation-stopper");
				clearTimeout(resizeTimer);
				resizeTimer = setTimeout(() => {
					document.body.classList.remove("resize-animation-stopper");
				}, 10);

				slideshow.style.width = slideshowWrapper.clientWidth;
				slideshowSlides.style.left = -slideshowWrapper.clientWidth + "px";
				for (let i = 0; i < slidesArr.length; i++) {
					slidesArr[i].style.width = slideshowWrapper.clientWidth + "px";
				}

				// fix for google tools
				resizeTimer = setTimeout(() => {
					slideshow.style.width = slideshowWrapper.clientWidth;
					slideshowSlides.style.left = -slideshowWrapper.clientWidth + "px";
					for (let i = 0; i < slidesArr.length; i++) {
						slidesArr[i].style.width = slideshowWrapper.clientWidth + "px";
					}
				}, 500);


				WIDTH = window.innerWidth;
				INITWIDTH = 1;
			}
		}

		//resize event
		window.addEventListener("resize", updateWidthForSlider);

		//update width for slides
		updateWidthForSlider();

		// Click events
		slideshowPrev.addEventListener("click", function () {
			shiftSlide(-1);
		});
		slideshowNext.addEventListener("click", function () {
			shiftSlide(1);
		});

		// Transition events
		slideshowSlides.addEventListener("transitionend", checkIndex);

		var THRESHOLD = 15;
		var x,y,x1,y1;
		x = y = x1 = y1 = 0;
		var recordedTime = new Date().getTime();
		setSwipesEvent(slideshowSlides);

		function setSwipesEvent(element) {
			element.addEventListener("touchstart", function (e) {
				50 < new Date().getTime() - recordedTime && ((x = parseInt(e.changedTouches[0].pageX, 10)),
				(y = parseInt(e.changedTouches[0].pageY, 10)),
				(recordedTime = new Date().getTime()));

				posInitial = slideshowSlides.offsetLeft;
			}, { passive: true});

			element.addEventListener("touchend", function (e) {
				x1 = x;
				y1 = y;
				x = parseInt(e.changedTouches[0].pageX, 10);
				y = parseInt(e.changedTouches[0].pageY, 10);
				recordedTime = new Date().getTime();
				direct(element);
			});

			element.addEventListener("mousedown", function (e) {
				e = e || window.event;
				e.preventDefault();

				50 < new Date().getTime() - recordedTime &&
					((x = e.clientX),
					(y = e.clientY),
					(recordedTime = new Date().getTime()));
					posInitial = slideshowSlides.offsetLeft;
			});

			element.addEventListener("mouseup", function (e) {
				e = e || window.event;
				e.preventDefault();
				x1 = x;
				y1 = y;
				x = e.clientX;
				y = e.clientY;
				recordedTime = new Date().getTime();

				direct(element);
			});
		}

		function direct(element) {
			if (!( parseInt(Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1)), 10) < THRESHOLD)) {
				if (x1 - x - 35 > Math.abs(y - y1)) {
					//console.log("left")
					shiftSlide(1);
				}
				if (x - x1 - 35 > Math.abs(y - y1)) {
					//console.log("right")
					shiftSlide(-1);
				}
				if (y1 - y > Math.abs(x - x1)) {
					//console.log("up")
				}
				if (y - y1 > Math.abs(x - x1)) {
					//console.log("down")
				}
			} else {
					//console.log("click")
				}
		}

		function shiftSlide(dir, action) {
			slideshowSlides.classList.add("shifting");

			if (allowShift) {
				if (!action) {
					posInitial = slideshowSlides.offsetLeft;
				}

				if (dir == 1) {
					slideshowSlides.style.left = posInitial - slideshowWrapper.offsetWidth + "px";
					index++;
				} else if (dir == -1) {
					slideshowSlides.style.left = posInitial + slideshowWrapper.offsetWidth + "px";
					index--;
				}
			}

			allowShift = false;
		}

		function checkIndex() {
			slideshowSlides.classList.remove("shifting");

			if (index == -1) {
				slideshowSlides.style.left = -(slidesLength * slideshowWrapper.offsetWidth) + "px";
				index = slidesLength - 1;
			}

			if (index == slidesLength) {
				slideshowSlides.style.left = -(1 * slideshowWrapper.offsetWidth) + "px";
				index = 0;
			}

			allowShift = true;
		}

		return () => window.removeEventListener("resize", updateWidthForSlider);

	}, []);

	return (
		<>
			<section>
				<div className="slideshow-title">{TITLE && <h2>{TITLE}</h2>}</div>
				<div id={SLIDESHOW_ID} className="slideshow">
					<div id={SLIDESHOW_ID + "-wrapper"} className="slideshow-wrapper">
						<div id={SLIDESHOW_ID + "-slides"} className="slideshow-slides">
							{SLIDES &&
								SLIDES.map((v, i) => (
									<div
										key={i}
										className={SLIDESHOW_ID + "-slide slideshow-slide"}
									>
										<img src={v.src} />
									</div>
								))}
						</div>
					</div>
					<div
						id={SLIDESHOW_ID + "-prev"}
						className="slideshow-control slideshow-prev"
					></div>
					<div
						id={SLIDESHOW_ID + "-next"}
						className="slideshow-control slideshow-next"
					></div>
				</div>
			</section>
		</>
	);
}
