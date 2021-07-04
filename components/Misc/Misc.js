import styles from "./Misc.module.css";
import Image from "next/image";

const Misc = () => {
  return (
    <div
      className={`bg-accent text-accent container-padding ${styles["text-size"]}`}
    >
      <div className="container-fluid">
        <h1 className={styles["heading"]}>Funded Projects</h1>
        <div className={styles["list-wrapper"]}>
          <ul>
            <li>
              Co-PI with job role as an International Expert Advisor for project
              &quot;Special and Urgent Collaborative Research Grants to Address
              COVID-19 Pandemic&quot;, published by NCST, Rwanda. Grant amount
              Rs. 45 Lakhs. (Granted 20.12.2020)
            </li>
            <li>
              Awarded 2000 Euros by AI Journal towards the application
              submission &quot;AAIW for under privileged&quot; in 2019 .
            </li>
          </ul>
        </div>

        <h1 className={styles["heading"]}>Founder of IoT Alliance</h1>
        <div className="row">
          <div className={`col-lg-3 col-md-12 col-sm-12 text-center`}>
            <Image
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
            <strong>Founder and Head of IoT Alliance club, </strong>a not to
            profit to train students, nurture skill sets, showcase outcomes in
            the field of IoT and develop products, since 2014.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Misc;
