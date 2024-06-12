import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./VideoCarousel.css";
import images from "./carousel.json";

// Asegúrate de tener los archivos SVG en tu proyecto o utiliza URLs
import leftArrow from '../../../public/icons/left-arrow.svg';
import rightArrow from '../../../public/icons/right-arrow.svg';

const VideoCarousel = () => {


    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div className={className} style={{ ...style, display: "block", content: 'none' }} onClick={onClick}>
                <img src={rightArrow} alt="Next" />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
                <img src={leftArrow} alt="Prev" />
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ],
        dotsClass: "slick-dots custom-dots"
    };

    return (
        <Slider className="slider-container" {...settings}>
            {images.map((image, index) => (
                <div className="image-container" key={index}>
                    <img src={image.image} alt={`slide ${index}`} />
                </div>
            ))}
        </Slider>
    );
};

export default VideoCarousel;
