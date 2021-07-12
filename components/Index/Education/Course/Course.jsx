import styles from "./Course.module.css";

const Course = ({ name, subject, yearAndCollege }) => {
  return (
    <div
      className={`col-lg-4 col-md-4 col-sm-12 ${styles["course-container"]}`}
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
