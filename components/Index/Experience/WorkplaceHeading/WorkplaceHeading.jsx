import styles from "./WorkplaceHeading.module.css";

import { useRef } from "react";
import useOnScreen from "../../../../utils/useOnScreen";

const WorkplaceHeading = ({ name }) => {
  const ref = useRef();

  const onScreen = useOnScreen(ref, "0px");
  return (
    <h5
      className={
        onScreen
          ? `${styles["workplace-heading"]} animate__animated animate__fadeInLeft ps-0`
          : `${styles["workplace-heading"]} animate__animated animate__fadeOutLeft ps-0`
      }
      ref={ref}
    >
      {name}
    </h5>
  );
};

export default WorkplaceHeading;
