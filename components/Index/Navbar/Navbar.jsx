import { useState } from "react";
import styles from "./navbar.module.css";
import Toggler from "./Toggler/Toggler";
import TogglerDropdownList from "./TogglerDropdownList/TogglerDropdownList";

const Navbar = () => {
  const [togglerStateOpen, setTogglerStateOpen] = useState(false);
  return (
    <nav className={`navbar bg-theme text-theme ${styles["navbar-shadow"]}`}>
      <div className="container-fluid">
        <a className={`navbar-brand ${styles["brand-title"]}`}>
          KayalvizhiJayavel
        </a>
        <Toggler
          onClick={() => {
            togglerStateOpen
              ? setTogglerStateOpen(false)
              : setTogglerStateOpen(true);
          }}
        />
        <TogglerDropdownList
          style={{ visibility: togglerStateOpen ? "visible" : "hidden" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
