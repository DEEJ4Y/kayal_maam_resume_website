import styles from "./WorkplaceHeading.module.css";

import { useRef } from "react";
import useOnScreen from "../../../../utils/useOnScreen";

const WorkplaceHeading = ({ name }) => {
  const ref = useRef();

  const onScreen = useOnScreen(ref, "0px");
  return (
    <h3
      className={
        onScreen
          ? `${styles["workplace-heading"]} animate__animated animate__fadeInLeft`
          : `${styles["workplace-heading"]} animate__animated animate__fadeOutLeft`
      }
      ref={ref}
    >
      {name}
    </h3>
  );
};

export default WorkplaceHeading;
