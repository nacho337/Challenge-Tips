import Carousel from "../../components/carousel/carousel.component";
import gallery from "../../utils/gallery";

function Home() {
  const cats = gallery;

  return (
    <div>
      <Carousel gallery={cats} />
    </div>
  );
}

export default Home;
