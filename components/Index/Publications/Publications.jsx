import styles from "./Publications.module.css";

import PublicationsCarousel from "./Carousel/Carousel";

const Publications = () => {
  return (
    <div className="bg-theme text-theme container-padding">
      <div className="container-fluid">
        <h1 className={styles["heading"]}>Publications</h1>
        <p className={styles["text-size"]}>
          Only a few of my publications are listed here. For more details visit
          my Google Scholar page and my Scopus page.
        </p>
        <PublicationsCarousel />
      </div>
    </div>
  );
};

export default Publications;
