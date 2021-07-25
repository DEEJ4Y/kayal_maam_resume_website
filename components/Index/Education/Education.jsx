import styles from "./Education.module.css";
import Course from "./Course/Course";

import { useRef } from "react";
import useOnScreen from "../../../utils/useOnScreen";

const Education = () => {
  const ref = useRef();

  const onScreen = useOnScreen(ref, "0px");
  return (
    <div
      id="education"
      className={`bg-theme text-theme ${styles["education-container"]} text-center`}
    >
      <div className="container-fluid">
        <h2
          className={
            onScreen
              ? `${styles["heading"]} animate__animated animate__fadeInUp`
              : `${styles["heading"]} animate__animated animate__fadeInDown`
          }
          ref={ref}
        >
          Education
        </h2>
        <div className="row">
          <Course
            name="Ph.D"
            subject="Computer Science"
            yearAndCollege="2019, SRMIST"
          />
          <Course
            name="M.E"
            subject="Embedded Systems"
            yearAndCollege="2006, College of Engineering, Guindy - Anna University"
          />
          <Course
            name="B.E"
            subject="Electronics and Communication Engineering"
            yearAndCollege="2001, Sai Ram Engineering College - Madras University"
          />
        </div>
        {/* <p>
          Ph.D Thesis: Design and Implementation of Internet of Things Testbed
          Framework - A Performance Enhanced Approach.
        </p> */}
      </div>
    </div>
  );
};

export default Education;
