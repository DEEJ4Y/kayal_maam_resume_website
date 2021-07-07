import styles from "./ActivitiesAndAchievements.module.css";

import AchievementsCarousel from "./AchievementsCarousel/AchievementsCarousel";

import Link from "next/link";

const ActivitiesAndAchievements = () => {
  return (
    <div className="container-padding bg-theme text-theme">
      <div className="container-fluid">
        <h2 className={styles["heading"]}>
          Professional Achievements and Activities
        </h2>
        <p>
          Have a look at my achievements and activities{" "}
          <Link passHref href="/achievements">
            here.
          </Link>
        </p>
        <AchievementsCarousel />
      </div>
    </div>
  );
};

export default ActivitiesAndAchievements;
