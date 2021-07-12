import styles from "./TogglerDropdownList.module.css";

import ListItem from "./ListItem/ListItem";

const TogglerDropdownList = (props) => {
  return (
    <div
      className={styles["toggler-dropdown-list"]}
      style={props.style ? props.style : ""}
      onMouseLeave={props.onMouseLeave ? props.onMouseLeave : () => {}}
    >
      <ul className="navbar-nav">
        <ListItem href="/publications" name="Publications" />
        <ListItem href="/achievements" name="Achievements and Activities" />
        <ListItem href="/#education" name="Education" />
        <ListItem href="/#experience" name="Experience" />
        <ListItem href="/#skills" name="Expertise and Skills" />
        <ListItem href="/#funded-projects" name="Funded Projects" />
        <ListItem href="/#patents" name="Patents" />
        <ListItem href="/#reviews" name="Reviews" />
        <ListItem href="/#memberships" name="Memberships" last />
      </ul>
    </div>
  );
};

export default TogglerDropdownList;
