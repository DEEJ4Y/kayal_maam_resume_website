import Carousel from "react-bootstrap/Carousel";
import styles from "./CarouselItem.module.css";

const CarouselItem = ({ publication }) => {
  return (
    <div className={`${styles["text"]}`}>
      <div className={styles["carousel-placeholder"]}></div>

      <Carousel.Caption>
        {publication.title ? (
          <h3 className={styles["text"]}>{publication.title}</h3>
        ) : (
          ""
        )}{" "}
        {publication.underReview ? (
          <h3 className={styles["text"]}>(Under Review)</h3>
        ) : (
          ""
        )}
        {publication.journal ? (
          <h6 className={styles["text"]}>{publication.journal}</h6>
        ) : (
          ""
        )}
        {publication.coPublisherAndUniversity ? (
          <h5>{publication.coPublisherAndUniversity}</h5>
        ) : (
          ""
        )}
      </Carousel.Caption>
    </div>
  );
};

export default CarouselItem;
