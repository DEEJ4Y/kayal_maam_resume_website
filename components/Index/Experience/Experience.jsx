import styles from "./Experience.module.css";

import WorkplaceHeading from "./WorkplaceHeading/WorkplaceHeading";
import ExperienceItem from "./ExperienceItem/ExperienceItem";

const Experience = () => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  let experinceInYears = year - 2002;
  if (month < 6) {
    experinceInYears -= 1;
  }

  return (
    <div className={`bg-accent text-accent container-padding`}>
      <div className="container-fluid">
        <h2 className={styles["heading"]}>Experience</h2>
        <p className={styles["sub-heading"]}>
          Total Experience:{" "}
          <strong className={styles["sub-heading-bold"]}>
            {experinceInYears}+ Years
          </strong>
        </p>

        <WorkplaceHeading name="SRMIST" />
        <ExperienceItem
          role="Assistant Professor, Selection Grade"
          duration="Since June 2 2017"
          current
        />
        <ExperienceItem
          role="Assistant Professor, Senior Grade"
          duration="June 1 2012 - June 1 2017"
        />
        <ExperienceItem
          role="Assistant Professor, Ordinary Grade"
          duration="June 2 2003 - June 1 2012"
        />

        <WorkplaceHeading name="Other" />
        <ExperienceItem
          role="Lecturer, Mariana Engineering College"
          duration="June 1 2002 - December 30 2002"
        />
        <ExperienceItem
          role="Lecturer, Sastha Engineering College"
          duration="June 1 2001 - May 30 2002"
        />
      </div>
    </div>
  );
};

export default Experience;