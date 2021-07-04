import styles from "./TogglerDropdownList.module.css";

import ListItem from "./ListItem/ListItem";

const TogglerDropdownList = (props) => {
  return (
    <div
      className={styles["toggler-dropdown-list"]}
      style={props.style ? props.style : ""}
    >
      <ul className="navbar-nav">
        <ListItem href="https://www.google.com/" name="Something" />
        <ListItem href="https://www.google.com/" name="Something Else" />
        <ListItem
          href="https://www.google.com/"
          name="Something something Else"
          last
        />
      </ul>
    </div>
  );
};

export default TogglerDropdownList;
