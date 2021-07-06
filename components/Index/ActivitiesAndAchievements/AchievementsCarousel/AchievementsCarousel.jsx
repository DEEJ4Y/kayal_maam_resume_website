import styles from "./AchievementsCarousel.module.css";
import Carousel from "react-bootstrap/Carousel";
import activitiesAndAchievements from "../../../../lib/index/activitiesAndAchievements";

const AchievementsCarousel = () => {
  return (
    <Carousel>
      {activitiesAndAchievements.map(({ text }, idx) => {
        return (
          <Carousel.Item key={idx}>
            <div className={styles["carousel-placeholder"]}></div>
            <Carousel.Caption>
              <h5>{text}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default AchievementsCarousel;
