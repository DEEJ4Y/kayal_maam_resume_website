import MembershipItem from "./MembershipItem/MembershipItem";
import styles from "./Memberships.module.css";

import { useRef } from "react";
import useOnScreen from "../../../utils/useOnScreen";

const Memberships = () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "0px");
  return (
    <div
      id="memberships"
      className="container-padding bg-accent text-accent"
      ref={ref}
    >
      <div className="container-fluid">
        <div
          className={onScreen ? `animate__animated animate__fadeInDown` : ``}
        >
          <h2 className={styles["heading"]}>Memberships</h2>
          <ul>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <MembershipItem
                  text="ACM: Professional Member"
                  duration="2013 - Till Date"
                />

                <MembershipItem
                  text="Member in Indian Science Congress Association (ISCA)"
                  duration="2013 - Till Date"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <MembershipItem
                  text="Indian Society of Technical Education"
                  duration="2015 - Till Date"
                />
                <MembershipItem
                  text="The Institute of Engineers (India)"
                  duration="2019 - Till Date"
                />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Memberships;
