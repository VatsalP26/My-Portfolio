import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Carousel = ({ items, baseWidth, autoplay, autoplayDelay, pauseOnHover, loop, showDots }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Autoplay logic
  useEffect(() => {
    if (!autoplay || isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev + 1 >= items.length && loop) return 0;
        if (prev + 1 >= items.length) return prev;
        return prev + 1;
      });
    }, autoplayDelay);
    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, items.length, isPaused, loop]);

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * baseWidth}px)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{ width: `${baseWidth}px` }}
          >
            <img src={item.image} alt={item.text} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      {showDots && (
        <div className="carousel-dots">
          {items.map((_, index) => (
            <span
              key={index}
              className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  baseWidth: PropTypes.number.isRequired,
  autoplay: PropTypes.bool,
  autoplayDelay: PropTypes.number,
  pauseOnHover: PropTypes.bool,
  loop: PropTypes.bool,
  showDots: PropTypes.bool,
};

Carousel.defaultProps = {
  autoplay: false,
  autoplayDelay: 3000,
  pauseOnHover: false,
  loop: false,
  showDots: false,
};

export default Carousel;