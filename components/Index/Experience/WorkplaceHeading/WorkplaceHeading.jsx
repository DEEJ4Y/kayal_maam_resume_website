import styles from "./WorkplaceHeading.module.css";

const WorkplaceHeading = ({ name }) => {
  return <h3 className={styles["workplace-heading"]}>{name}</h3>;
};

export default WorkplaceHeading;
