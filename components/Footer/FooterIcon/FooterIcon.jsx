/* eslint-disable @next/next/no-img-element */
import styles from "./FooterIcon.module.css";
import Link from "next/link";

const FooterIcon = ({ url, img, imgAlt, last }) => {
  return (
    <span
      style={{ marginRight: last ? "0" : "1rem" }}
      className={styles["link"]}
    >
      <Link passHref={true} href={url ? url : ""}>
        <img
          src={img ? img : ""}
          alt={imgAlt ? imgAlt : ""}
          width={24}
          height={24}
        ></img>
      </Link>
    </span>
  );
};

export default FooterIcon;
