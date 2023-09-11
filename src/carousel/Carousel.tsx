import { useEffect, useRef, useState } from "react"
import { ArrowLeft, ArrowRight, CarouselStyled, CarouselWrapper } from "./Carousel.styled"
import { Button } from "../buttons/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { useWindowSize } from "../hooks/useWindowSize"

interface Props {
	children: React.ReactNode
}

export const Carousel = ({ children }: Props): JSX.Element => {
	const carouselRef = useRef<any>(null)
	const [showArrowLeft, setShowArrowLeft ] = useState<boolean>(false)
	const [showArrowRight, setShowArrowRight ] = useState<boolean>(false)
	const [width] = useWindowSize();

	// check if show right arrow
	useEffect(() => {
		let timerId = setTimeout(() => {
			handleScroll()
		}, 1);

		return () => clearTimeout(timerId);
	}, [width]);

	const slideLeft = () => {
		carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth
	}

	const slideRight = () => {
		carouselRef.current.scrollLeft += carouselRef.current.offsetWidth
	}

	const handleScroll = () => {
		if (carouselRef.current.scrollLeft <= 0) {
			setShowArrowLeft(false)
			if ((carouselRef.current.scrollWidth - carouselRef.current.clientWidth) !== 0) {
				setShowArrowRight(true)
			} else {
				setShowArrowRight(false)
			}
		} else if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth ) {
			setShowArrowLeft(true)
			setShowArrowRight(false)
		} else {
			setShowArrowLeft(true)
			setShowArrowRight(true)
		}
	}

	return (
		<CarouselWrapper>
			<CarouselStyled ref={carouselRef} onScroll={handleScroll}>
				<ArrowLeft $showArrow={showArrowLeft}>
					<Button
						styled={"arrow"}
						text={<FontAwesomeIcon icon={faAngleLeft} color={"black"} size={"2x"} />}
						title={"ArrowLeft"}
						ariaLabel={"arrow-left"}
						type={"button"}
						onClick={slideLeft} />
				</ArrowLeft>
				{children}
				<ArrowRight $showArrow={showArrowRight}>
					<Button
						styled={"arrow"}
						text={<FontAwesomeIcon icon={faAngleRight} color={"black"} size={"2x"} />}
						title={"ArrowRight"}
						ariaLabel={"arrow-left"}
						type={"button"}
						onClick={slideRight} />
				</ArrowRight>
			</CarouselStyled>
		</CarouselWrapper>
	)
}



// useEffect(() => {
// 	let timerId = setTimeout(() => {
// 		console.log(forecastData8DaysRef.current.offsetWidth)
// 		console.log(forecastData8DaysRef.current.scrollWidth)
// 		console.log(forecastData8DaysRef.current.children[0].offsetWidth)
// 		//forecastData8DaysRef.current.scrollLeft += forecastData8DaysRef.current.offsetWidth
// 	}, 1);

// 	return () => clearTimeout(timerId);
// }, [])


// https://elisavettriant.github.io/intersection-observer-slider-react/