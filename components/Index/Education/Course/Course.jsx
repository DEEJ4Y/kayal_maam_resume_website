import styles from "./Course.module.css";

const Course = ({ name, subject, yearAndCollege, description }) => {
  return (
    <div
      className={`col-lg-4 col-md-4 col-sm-12 ${styles["course-container"]}`}
    >
      <h3 className={styles["course-name"]}>{name}</h3>
      <h4 className={styles["subject-name"]}>{subject}</h4>
      <p className={styles["year-and-college"]}>{yearAndCollege}</p>
      {description ? (
        <p className={styles["year-and-college"]}>
          <em>{description}</em>
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Course;
