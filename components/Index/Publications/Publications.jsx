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
          . For more details visit my{" "}
          <Link
            passHref
            href="https://scholar.google.com/citations?user=GeOfGFoAAAAJ&hl=en"
          >
            Google Scholar
          </Link>{" "}
          page and my{" "}
          <Link
            passHref
            href="https://www.scopus.com/authid/detail.uri?authorId=57188638422"
          >
            Scopus
          </Link>{" "}
          page.
        </p>
        <ul className="ml-4 text-primary clickable">
          <Link passHref href="/publications">
            <li>My Publications</li>
          </Link>
          <Link
            passHref
            href="https://scholar.google.com/citations?user=GeOfGFoAAAAJ&hl=en"
          >
            <li>Google Scholar</li>
          </Link>
          <Link
            passHref
            href="https://www.scopus.com/authid/detail.uri?authorId=57188638422"
          >
            <li>Scopus</li>
          </Link>
        </ul>
        <PublicationsCarousel />
      </div>
    </div>
  );
};

export default Publications;
