import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

// Import images from the local src folder
import Image1 from '../assets/1.jpg';
import Image2 from '../assets/2.jpg';
import Image3 from '../assets/3.jpg';

// Add the imported images and corresponding text
const slides = [
  { image: Image1, text: 'Explore the Beauty of Nature' },
  { image: Image2, text: 'Capture the Moment' },
  { image: Image3, text: 'Feel the Adventure' }
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="slider-container">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="slide-text">
              <h2>{slide.text}</h2>
            </div>
          </div>
        ))}
      </div>
      <button className="prev-button" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="next-button" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
}

export default ImageSlider;
