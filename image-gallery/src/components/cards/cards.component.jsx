import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Cards.styles.css";
const Cards = ({gallery}) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

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

  return (
    <div>
      {openModal && (
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
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btnClose"
            onClick={handleCloseModal}
            size="2x"
          />
          <div className="fullScreenImage">
            <img src={gallery[slideNumber].img} alt="" />
          </div>
        </div>
      )}

      <div className="img-container">
        {gallery &&
          gallery.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt="slide" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cards;
