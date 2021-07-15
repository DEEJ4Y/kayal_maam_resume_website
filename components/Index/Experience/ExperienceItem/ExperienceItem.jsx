import styles from "./ExperienceItem.module.css";

import { useRef } from "react";
import useOnScreen from "../../../../utils/useOnScreen";

const ExperienceItem = ({ role, duration, current }) => {
  const ref = useRef();

  const onScreen = useOnScreen(ref, "0px");
  return (
    <div
      className={
        onScreen
          ? `${styles["experience-item-container"]} animate__animated animate__fadeInRight`
          : `${styles["experience-item-container"]} animate__animated animate__fadeOutRight`
      }
      ref={ref}
    >
      <h4 className={styles["experience-role"]}>{role}</h4>
      <p className={styles["experience-duration"]}>
        {current ? (
          <span>
            <strong>Current</strong>,{" "}
          </span>
        ) : (
          ""
        )}
        {duration}
      </p>
    </div>
  );
};

export default ExperienceItem;
