/* eslint-disable @next/next/no-img-element */
import styles from "./Misc.module.css";
import Link from "next/link";

import { useRef } from "react";
import useOnScreen from "../../../utils/useOnScreen";

const Misc = () => {
  const fundedProjectsRef = useRef();
  const iotaRef = useRef();

  const fundedProjectsOnScreen = useOnScreen(fundedProjectsRef, "0px");
  const iotaOnScreen = useOnScreen(iotaRef, "0px");

  return (
    <div
      id="funded-projects"
      className={`bg-accent text-accent container-padding`}
    >
      <div className="container-fluid">
        <div
          ref={fundedProjectsRef}
          className={
            fundedProjectsOnScreen
              ? `animate__animated animate__fadeInRight`
              : `animate__animated animate__fadeOutLeft`
          }
        >
          <h2 className={styles["heading"]}>Funded Projects</h2>
          <div className={styles["list-wrapper"]}>
            <ul>
              <li>
                Grant-In-Aid received worth one lakh under AICTE-SPICES scheme
                for IoT Alliance club development (Granted 05.03.2021)
              </li>
              <li>
                Co-PI with job role as an International Expert Advisor for
                project &quot;Special and Urgent Collaborative Research Grants
                to Address COVID-19 Pandemic&quot;, published by NCST, Rwanda.
                Grant amount Rs. 45 Lakhs. (Granted 20.12.2020)
              </li>
              <li>
                Awarded 2000 Euros by AI Journal towards the application
                submission &quot;AAIW for under privileged&quot; in 2019 .
              </li>
            </ul>
          </div>
        </div>

        <div
          ref={iotaRef}
          className={
            iotaOnScreen
              ? `animate__animated animate__fadeInLeft`
              : `animate__animated animate__fadeOutRight`
          }
        >
          <h2 className={styles["heading"]}>Founder of IoT Alliance</h2>
          <div className="row">
            <div className={`col-lg-3 col-md-12 col-sm-12 text-center`}>
              <img
                src="/images/iota.png"
                width={160}
                height={160}
                alt="iota-img"
                className={styles["iota-img"]}
              />
            </div>
            <div
              className={`col-lg-9 col-md-12 col-sm-12 ${styles["iota-text"]}`}
            >
              <strong>
                Founder and Head of{" "}
                <Link passHref href="https://iotalliance.in/">
                  IoT Alliance
                </Link>{" "}
                club,{" "}
              </strong>
              a not to profit to train students, nurture skill sets, showcase
              outcomes in the field of IoT and develop products, since 2014.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Misc;
