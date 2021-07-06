import styles from "./ActivitiesAndAchievements.module.css";

import AchievementsCarousel from "./AchievementsCarousel/AchievementsCarousel";

const ActivitiesAndAchievements = () => {
  return (
    <div className="container-padding bg-theme text-theme">
      <div className="container-fluid">
        <h2 className={styles["heading"]}>
          Professional Activities and Achievements
        </h2>
        <AchievementsCarousel />
      </div>
    </div>
  );
};

export default ActivitiesAndAchievements;
