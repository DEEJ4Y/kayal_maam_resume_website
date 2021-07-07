import MembershipItem from "./MembershipItem/MembershipItem";
import styles from "./Memberships.module.css";
const Memberships = () => {
  return (
    <div id="memberships" className="container-padding bg-accent text-accent">
      <div className="container-fluid">
        <h2 className={styles["heading"]}>Memberships</h2>
        <ul>
          <MembershipItem
            text="ACM: Professional Member"
            duration="2013 - Till Date"
          />
          <MembershipItem
            text="Member in Indian Science Congress Association (ISCA)"
            duration="2013 - Till Date"
          />
          <MembershipItem
            text="The Institute of Engineers (India)"
            duration="2019 - Till Date"
          />
          <MembershipItem
            text="Indian Society of Technical Education"
            duration="2015 - Till Date"
          />
        </ul>
      </div>
    </div>
  );
};

export default Memberships;
