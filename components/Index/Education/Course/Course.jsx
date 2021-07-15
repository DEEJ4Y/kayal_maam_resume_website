import styles from "./Course.module.css";

import { useRef } from "react";
import useOnScreen from "../../../../utils/useOnScreen";

const Course = ({ name, subject, yearAndCollege }) => {
  const ref = useRef();

  const onScreen = useOnScreen(ref, "0px");
  return (
    <div
      className={
        onScreen
          ? `col-lg-4 col-md-4 col-sm-12 ${styles["course-container"]} animate__animated animate__fadeInDown`
          : `col-lg-4 col-md-4 col-sm-12 ${styles["course-container"]} animate__animated animate__fadeOut`
      }
      ref={ref}
    >
      <div className={styles["top-wrapper"]}>
        <h3 className={styles["course-name"]}>{name}</h3>
        <h4 className={styles["subject"]}>{subject}</h4>
      </div>
      <p className={styles["year-and-college"]}>{yearAndCollege}</p>
    </div>
  );
};

export default Course;
