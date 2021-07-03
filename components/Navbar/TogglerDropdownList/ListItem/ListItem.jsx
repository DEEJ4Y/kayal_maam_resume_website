import Link from "next/link";
import styles from "./ListItem.module.css";

const ListItem = ({ href, name, last }) => {
  return (
    <div className={styles["list-item"]}>
      <Link href={href} passHref>
        <li className="nav-item">
          <a>{name}</a>
        </li>
      </Link>

      {last ? "" : <hr className={styles["list-item-hr"]} />}
    </div>
  );
};

export default ListItem;
