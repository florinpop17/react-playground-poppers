import React, { useState, useEffect } from "react";

const Carousel = ({ data, size = 500, speed = 5000 }) => {
    const [currentImageIdx, setCurrentImage] = useState(0);

    const totalImages = data.length;
    const IMAGE_SIZE = size;

    const prevImg = () => {
        if (currentImageIdx === 0) return;

        setCurrentImage(currentImageIdx - 1);
    };

    const nextImg = () => {
        if (currentImageIdx === totalImages - 1) return;

        setCurrentImage(currentImageIdx + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentImageIdx === totalImages - 1) {
                setCurrentImage(0);
            } else {
                setCurrentImage(currentImageIdx + 1);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [currentImageIdx, totalImages, speed]);

    return data.length > 0 ? (
        <div
            className="carousel"
            style={{
                "--image-size": `${IMAGE_SIZE}px`,
            }}
        >
            <div
                className="images-container"
                style={{
                    transform: `translateX(-${currentImageIdx * IMAGE_SIZE}px)`,
                }}
            >
                {data.map((imageUrl, idx) => (
                    <img
                        style={{
                            left: `${idx * IMAGE_SIZE}px`,
                        }}
                        src={imageUrl}
                        alt={`ivan-${idx}`}
                    />
                ))}
            </div>
            <div className="controls">
                <button onClick={prevImg} disabled={currentImageIdx === 0}>
                    <i className="fas fa-caret-left"></i>
                </button>
                <p>
                    {currentImageIdx + 1}/{totalImages}
                </p>
                <button
                    onClick={nextImg}
                    disabled={currentImageIdx === totalImages - 1}
                >
                    <i className="fas fa-caret-right"></i>
                </button>
            </div>
        </div>
    ) : null;
};

export default Carousel;
