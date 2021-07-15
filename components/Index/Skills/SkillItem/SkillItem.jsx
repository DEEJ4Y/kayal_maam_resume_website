/* eslint-disable @next/next/no-img-element */
import styles from "./SkillItem.module.css";

import { useRef } from "react";
import useOnScreen from "../../../../utils/useOnScreen";

const SkillItem = ({ text, imgUrl, space }) => {
  const ref = useRef();

  const onScreen = useOnScreen(ref, "0px");

  let gridClasses;
  if (space === 2) {
    gridClasses = "col-lg-6 col-md-6 col-sm-12";
  } else if (space === 3) {
    gridClasses = "col-lg-4 col-md-6 col-sm-12";
  } else if (space === 4) {
    gridClasses = "col-lg-3 col-md-6 col-sm-12";
  }

  return (
    <div
      className={
        onScreen
          ? `${gridClasses} text-center animate__animated animate__fadeInDown`
          : `${gridClasses} text-center animate__animated`
      }
      ref={ref}
    >
      {imgUrl ? (
        <img
          src={imgUrl}
          width={102}
          height={102}
          alt={`${text}-img`}
          className={styles["skill-image"]}
        />
      ) : (
        ""
      )}
      <p className={styles["skill-text"]}>{text}</p>
    </div>
  );
};

export default SkillItem;
