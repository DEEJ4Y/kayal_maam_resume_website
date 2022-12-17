/* eslint-disable @next/next/no-img-element */
import styles from "./TitleSection.module.css";
import Link from "next/link";
import useWindowSize from "../../../utils/useWindowSize";

const TitleSection = () => {
  const [width, height] = useWindowSize();
  return (
    <div id="title-section" className={`text-theme bg-theme`}>
      <img
        src={
          width > 1024
            ? "/images/misc/flowers-bg-xl.jpg"
            : width > 768
            ? "/images/misc/flowers-bg.jpg"
            : width > 552
            ? "/images/misc/flowers-bg-md.jpg"
            : "/images/misc/flowers-bg-sm.jpg"
        }
        alt="page-background-img"
        className={styles["page-bg"]}
        height={height}
        width={width}
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
              Assistant Director, International Relations Office
            </p>
            <p className={styles["title-desc"]}>
              Associate Professor, School of Computing
            </p>
            <p className={styles["title-desc"]}>
              SRM Institute of Science and Technology
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
