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
          <h3 className={styles["sub-heading"]} ref={experienceRef}>
            Total Experience:{" "}
            <strong className={styles["sub-heading-bold"]}>
              <CountUp
                end={experienceOnScreen ? experienceInYears : 0}
                duration={3}
              />
              + Years
            </strong>
          </h3>
        </div>
        <div className="text-center">
          {/* <div className="col-lg-6 col-md-12 col-sm-12"> */}
          {/* <WorkplaceHeading name="SRMIST" /> */}
          <ExperienceItem
            role="Assistant Professor, SRMIST"
            duration="Since January 2 2003"
            current
          />
          {/* </div>
          <div className="col-lg-6 col-md-12 col-sm-12"> */}
          {/* <WorkplaceHeading name="Other" /> */}
          <ExperienceItem
            role="Lecturer, Mariana Engineering College"
            duration="June 1 2002 - December 30 2002"
          />
          <ExperienceItem
            role="Lecturer, Sastha Engineering College"
            duration="June 1 2001 - May 30 2002"
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
