/* eslint-disable @next/next/no-img-element */
import styles from "./TitleSection.module.css";
import Link from "next/link";

const TitleSection = () => {
  return (
    <div className={`text-theme`}>
      <div
        className={styles["title-background"]}
        style={{ backgroundColor: "#1ecbe1" }}
      >
        <div className={`container-fluid ${styles["title-container"]}`}>
          <div className="row">
            <div
              className={`col-lg-3 col-md-12 col-sm-12 ${styles["title-left"]}`}
            >
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
            >
              <h1 className={styles["title-name"]}>
                Dr. Kayalvizhi Jayavel Ph.D
              </h1>
              <p className={styles["title-desc"]}>
                Assistant Professor (S.G), School of Computing, SRMIST
              </p>
              <Link passHref href="/#contact">
                <button
                  className={`btn bg-theme text-theme btn-lg ${styles["title-button"]}`}
                >
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
