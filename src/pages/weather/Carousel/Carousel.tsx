import { useEffect, useRef, useState } from "react"
import { Button } from "najwer23storybook/lib/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { useWindowSize } from "../../../hooks/useWindowSize"

import styles from './index.module.css'


interface Props {
    children: React.ReactNode
}

export const Carousel = ({ children }: Props): JSX.Element => {
    const carouselRef = useRef<any>(null)
    const [showArrowLeft, setShowArrowLeft] = useState<boolean>(false)
    const [showArrowRight, setShowArrowRight] = useState<boolean>(false)
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
        } else if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
            setShowArrowLeft(true)
            setShowArrowRight(false)
        } else {
            setShowArrowLeft(true)
            setShowArrowRight(true)
        }
    }

    return (
        <div className={styles["carouselWrapper"]}>
            <div className={styles["carouselStyled"]} ref={carouselRef} onScroll={handleScroll}>
                <div className={[styles["arrowLeft"],showArrowLeft && styles["arrowShow"]].join(' ')} >
                    <Button
                        text={<FontAwesomeIcon icon={faAngleLeft} color={"white"} size={"lg"} />}
                        ariaLabel={"move carousel left"}
                        type={"button"}
                        onClick={slideLeft} />
                </div>
                {children}
                <div className={[styles["arrowRight"], showArrowRight && styles["arrowShow"]].join(' ')} >
                    <Button
                        text={<FontAwesomeIcon icon={faAngleRight} color={"white"} size={"lg"} />}
                        ariaLabel={"move carousel right"}
                        type={"button"}
                        onClick={slideRight} />
                </div>
            </div>
        </div>
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