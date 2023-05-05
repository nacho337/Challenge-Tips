import {useContext} from "react";
import {GalleryContext} from "../../contexts/cards/cards.context";

import "./Cards.styles.css";

const Cards = ({gallery}) => {
  const {setSlideNumber, handleClick} = useContext(GalleryContext);

  const click = (index) => {
    setSlideNumber(index);
  };

  return (
    <div className="img-container">
      {gallery &&
        gallery.map((slide, index) => {
          return (
            <div className="single" key={index} onClick={() => click(index)}>
              <img src={slide.img} alt="slide" />
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
