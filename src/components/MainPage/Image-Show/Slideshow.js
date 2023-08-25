import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import your CSS file for the slideshow

const Slideshow = ({ play, moviePoster, error }) => {
    const images = moviePoster.map(item => ({
        id: item.id,
        movieImage: item.movieImage
    }));

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        let interval;

        if (play) {
            interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) =>
                    (prevIndex + 1) % images.length
                );
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [play, moviePoster]);

    return (
        <div className="slideshow-container">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.movieImage}
                    alt={`Image ${index + 1}`}
                    className={`slide ${index === currentImageIndex ? 'active' : ''}`}
                />
            ))}
        </div>
    );
};

export default Slideshow;
