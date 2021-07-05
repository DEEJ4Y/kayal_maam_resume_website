import Carousel from "react-bootstrap/Carousel";
import styles from "./Carousel.module.css";

const PublicationsCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className={styles["carousel-placeholder"]}></div>
        <Carousel.Caption>
          <h3>
            Technology for improved operating room scheduling-A case of
            Kilimanjaro Christian Medical Center (2021)
          </h3>{" "}
          <h3>(Under Review)</h3>
          <h4>Int. Journal of Comp. Aided Eng. &#38; Tech</h4>
          <p>With Mtonga K, University of Rwanda.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles["carousel-placeholder"]}></div>

        <Carousel.Caption>
          <h3>
            Technology for improved operating room scheduling-A case of
            Kilimanjaro Christian Medical Center (2021)
          </h3>{" "}
          <h3>(Under Review)</h3>
          <h4>Int. Journal of Comp. Aided Eng. &#38; Tech</h4>
          <p>With Mtonga K, University of Rwanda.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles["carousel-placeholder"]}></div>

        <Carousel.Caption>
          <h3>
            Technology for improved operating room scheduling-A case of
            Kilimanjaro Christian Medical Center (2021)
          </h3>{" "}
          <h3>(Under Review)</h3>
          <h4>Int. Journal of Comp. Aided Eng. &#38; Tech</h4>
          <p>With Mtonga K, University of Rwanda.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default PublicationsCarousel;
