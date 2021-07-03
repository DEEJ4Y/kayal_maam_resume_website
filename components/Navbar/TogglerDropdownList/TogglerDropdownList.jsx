import styles from "./TogglerDropdownList.module.css";

import ListItem from "./ListItem/ListItem";

const TogglerDropdownList = (props) => {
  return (
    <div
      className={styles["toggler-dropdown-list"]}
      style={props.style ? props.style : ""}
    >
      <ul className="navbar-nav">
        <li className="nav-item text-dark">
          <a>Something</a>
        </li>
        <li className="nav-item text-dark">
          <a>Something Else</a>
        </li>
        <ListItem
          href="https://www.google.com/"
          name="Something something Else"
        />
      </ul>
    </div>
  );
};

export default TogglerDropdownList;
