import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "./CarouselItem/CarouselItem";

import publications from "../../../../lib/index/publications";

const PublicationsCarousel = () => {
  return (
    <Carousel interval={7000}>
      {publications.map((publication, idx) => {
        // console.log(publication, idx);
        return idx === 0 ? (
          <Carousel.Item key={idx} active>
            <CarouselItem publication={publication} />
          </Carousel.Item>
        ) : (
          <Carousel.Item key={idx}>
            <CarouselItem publication={publication} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default PublicationsCarousel;
