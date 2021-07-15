import styles from "./Experience.module.css";

import WorkplaceHeading from "./WorkplaceHeading/WorkplaceHeading";
import ExperienceItem from "./ExperienceItem/ExperienceItem";

import CountUp from "react-countup";

import { useRef } from "react";
import useOnScreen from "../../../utils/useOnScreen";

const Experience = () => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  let experienceInYears = year - 2002;
  if (month < 6) {
    experienceInYears -= 1;
  }

  const experienceRef = useRef();
  const experienceOnScreen = useOnScreen(experienceRef, "0px");

  return (
    <div id="experience" className={`bg-accent text-accent container-padding`}>
      <div className="container-fluid">
        <div className="text-center">
          <h2 className={styles["heading"]}>Experience</h2>
          <p className={styles["sub-heading"]} ref={experienceRef}>
            Total Experience:{" "}
            <strong className={styles["sub-heading-bold"]}>
              <CountUp
                end={experienceOnScreen ? experienceInYears : 0}
                duration={3}
              />
              + Years
            </strong>
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
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
              duration="January 2 2003 - June 1 2012"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
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
      </div>
    </div>
  );
};

export default Experience;
