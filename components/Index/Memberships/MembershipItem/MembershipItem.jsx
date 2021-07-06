import styles from "./MembershipItem.module.css";

const MembershipItem = ({ text, duration }) => {
  return (
    <li>
      <h5 className={styles["title"]}>{text}</h5>
      <p>{duration}</p>
    </li>
  );
};

export default MembershipItem;
