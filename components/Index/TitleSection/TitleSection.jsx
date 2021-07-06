/* eslint-disable @next/next/no-img-element */
import styles from "./TitleSection.module.css";

const TitleSection = () => {
  return (
    <div className="bg-accent text-accent">
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
            <h1 className={styles["title-name"]}>Kayalvizhi Jayavel Ph.D</h1>
            <p className={styles["title-desc"]}>
              Assistant Professor (S.G), School of Computing, SRMIST
            </p>
            <button
              className={`btn bg-theme text-theme btn-lg ${styles["title-button"]}`}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
