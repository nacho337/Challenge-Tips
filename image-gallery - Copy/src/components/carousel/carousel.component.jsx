import {useEffect, useState} from "react";
import {useContext} from "react";
import {GalleryContext} from "../../contexts/cards/cards.context";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

import "./carousel.styles.css";

function Carousel({gallery}) {
  const {slideNumber, setSlideNumber} = useContext(GalleryContext);

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(gallery.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === gallery.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [slideNumber]);

  return (
    <div>
      <div className="slider">
        <FontAwesomeIcon
          icon={faChevronRight}
          className="btnNext"
          onClick={nextSlide}
          size="2x"
        />
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="btnPrev"
          onClick={prevSlide}
          size="2x"
        />

        <div className="fullScreenImage">
          <img src={gallery[slideNumber].img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
