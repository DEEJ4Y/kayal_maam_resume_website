import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "./CarouselItem/CarouselItem";

import publications from "../../../../lib/index/publications";

const PublicationsCarousel = () => {
  return (
    <Carousel interval={5000}>
      {publications.map((publication, idx) => {
        // console.log(publication, idx);
        return (
          <Carousel.Item key={idx}>
            <CarouselItem publication={publication} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default PublicationsCarousel;
