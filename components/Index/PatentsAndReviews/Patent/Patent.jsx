import styles from "./Patent.module.css";

const Patent = ({ text, id, date }) => {
  return (
    <div className={styles["wrapper"]}>
      {text ? <p className={styles["text"]}>{text}</p> : ""}
      <div style={{ position: "relative" }}>
        <div style={{ float: "left" }}>{id ? id : ""}</div>
        <div style={{ float: "right" }}>{date ? date : ""}</div>
      </div>
    </div>
  );
};

export default Patent;
