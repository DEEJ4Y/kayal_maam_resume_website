import styles from "./Publications.module.css";

import PublicationsCarousel from "./Carousel/Carousel";
import Loader from "react-loader-spinner";

import Link from "next/link";
import { useState } from "react";

const Publications = () => {
  const [loadingState, setLoadingState] = useState({
    scholar: false,
    scopus: false,
  });
  const handleURLClick = (e) => {
    const { name } = e.target;
    if (name === "scholar-link") {
      setLoadingState((prev) => {
        return {
          scholar: true,
          scopus: false,
        };
      });
    }
  };
  return (
    <div className="bg-theme text-theme container-padding">
      <div className="container-fluid">
        <h2 className={styles["heading"]}>Publications</h2>
        {/* <p className={styles["text-size"]}>
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
        </p> */}
        <ul className="ml-4 text-primary clickable">
          <Link passHref href="/publications">
            <li>My Publications</li>
          </Link>
          <Link
            passHref
            href="https://scholar.google.com/citations?user=GeOfGFoAAAAJ&hl=en"
          >
            <li
              id="publications-scholar-link"
              name="scholar-link"
              onClick={handleURLClick}
            >
              Google Scholar
              {loadingState.scholar ? (
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={3000} //3 secs
                />
              ) : (
                ""
              )}
            </li>
          </Link>
          <Link
            passHref
            href="https://www.scopus.com/authid/detail.uri?authorId=57188638422"
          >
            <li
              id="publications-scholar-link"
              name="scopus-link"
              onClick={handleURLClick}
            >
              Scopus
            </li>
          </Link>
        </ul>
        <PublicationsCarousel />
      </div>
    </div>
  );
};

export default Publications;
