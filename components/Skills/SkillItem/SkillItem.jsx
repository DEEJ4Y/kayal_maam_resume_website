import styles from "./SkillItem.module.css";

import Image from "next/image";

const SkillItem = ({ text, imgUrl, space }) => {
  let gridClasses;
  if (space === 2) {
    gridClasses = "col-lg-6 col-md-6 col-sm-12";
  } else if (space === 3) {
    gridClasses = "col-lg-4 col-md-6 col-sm-12";
  } else if (space === 4) {
    gridClasses = "col-lg-3 col-md-6 col-sm-12";
  }

  return (
    <div className={`${gridClasses} text-center`}>
      {imgUrl ? (
        <Image
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
