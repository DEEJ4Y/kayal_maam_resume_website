import styles from "./ExperienceItem.module.css";

const ExperienceItem = ({ role, duration, current }) => {
  return (
    <div className={styles["experience-item-container"]}>
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
