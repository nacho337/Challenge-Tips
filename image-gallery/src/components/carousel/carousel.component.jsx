import Cards from "../cards/cards.component";

import "./carousel.styles.css";

function Carousel({gallery}) {
  return (
    <div className="container">
      <h2>Gatos D&D</h2>
      <Cards gallery={gallery} />
    </div>
  );
}

export default Carousel;
