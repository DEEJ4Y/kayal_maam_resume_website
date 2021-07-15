/* eslint-disable @next/next/no-img-element */
import styles from "./TitleSection.module.css";
import Link from "next/link";

const TitleSection = () => {
  return (
    <div className={`text-theme bg-theme`}>
      <img
        src="/images/misc/flowers-bg.jpg"
        alt="page-background-img"
        className={styles["page-bg"]}
      />
      {/* <div
        className={styles["title-background"]}
        style={{ backgroundColor: "#1ecbe1" }}
      > */}
      <div className={`container-fluid ${styles["title-container"]}`}>
        <div className="row">
          <div
            className={`col-lg-3 col-md-12 col-sm-12 ${styles["title-left"]}`}
            data-aos="fade-right"
          >
            {/* <img
                className={styles["flower-img"]}
                src="/images/misc/flower-round.png"
                alt="placeholder-flowers"
              /> */}
            <img
              src="/images/profile.jpg"
              width={200}
              height={200}
              alt="profile-img"
              className={styles["title-img"]}
            />
          </div>

          <div
            className={`col-lg-9 col-md-12 col-sm-12 ${styles["title-right"]}`}
            data-aos="fade-left"
          >
            <h1 className={styles["title-name"]}>
              Dr. Kayalvizhi Jayavel Ph.D
            </h1>
            <p className={styles["title-desc"]}>
              Assistant Professor (S.G), School of Computing, SRMIST
            </p>
            <Link passHref href="/#contact">
              <button
                className={`btn bg-accent text-accent btn-lg ${styles["title-button"]}`}
              >
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default TitleSection;
