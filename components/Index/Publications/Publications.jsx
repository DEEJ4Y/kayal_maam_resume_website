import styles from "./Publications.module.css";

import PublicationsCarousel from "./Carousel/Carousel";

import Link from "next/link";

const Publications = () => {
  return (
    <div className="bg-theme text-theme container-padding">
      <div className="container-fluid">
        <h2 className={styles["heading"]}>Publications</h2>
        <p className={styles["text-size"]}>
          Only a few of my publications are listed{" "}
          <Link passHref href="/publications">
            here
          </Link>
          . For more details visit my Google Scholar page and my Scopus page.
        </p>
        <PublicationsCarousel />
      </div>
    </div>
  );
};

export default Publications;
