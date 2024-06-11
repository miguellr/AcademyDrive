import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./VideoCarousel.css";
import Lightbox from 'yet-another-react-lightbox';

const VideoCarousel = () => {
    const images = [
        {
            thumbnail: "https://pbs.twimg.com/media/GIzIdQLWIAA1Ex6?format=jpg&name=large",
            image: "https://mediaplus.quincemil.com/imagen4_3/78/780465.jpg"
        },
        {
            thumbnail: "https://pbs.twimg.com/media/GIzIdQLWIAA1Ex6?format=jpg&name=large",
            image: "https://huelvabuenasnoticias.com/wp-content/uploads/2013/07/DEPORTES-CAMPUS-RAMIRO-AMARELLE-FOTO-FAMLIA.jpg"
        },
        {
            thumbnail: "https://pbs.twimg.com/media/GIzIdQLWIAA1Ex6?format=jpg&name=large",
            image: "https://pbs.twimg.com/media/GIzIdQLWIAA1Ex6?format=jpg&name=large"
        }
    ];

    return (
        <div className='carrousel-academy'>
            <Carousel
                showThumbs={true}
                showArrows={true}
                infiniteLoop
                useKeyboardArrows
                dynamicHeight
                renderThumbs={() =>
                    images.map(image =>
                        <div className='thumbnail-carousel'>
                            <img src={image.thumbnail} alt="video thumbnail" />
                        </div>
                    )
                }
            >
                {images.map((image, index) => (
                    <div className="image-container" key={index}>
                        <img src={image.image} alt={`slide ${index}`} />
                    </div>
                ))}
            </Carousel>

        </div>
    );
};

export default VideoCarousel;
