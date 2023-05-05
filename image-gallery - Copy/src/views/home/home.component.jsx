import Cards from "../../components/cards/cards.component";
import Carousel from "../../components/carousel/carousel.component";
import gallery from "../../utils/gallery";

import "./home.styles.css";

function Home() {
  const cats = gallery;

  return (
    <div className="home-container">
      <Carousel gallery={cats} />
      <Cards gallery={cats} />
    </div>
  );
}

export default Home;
