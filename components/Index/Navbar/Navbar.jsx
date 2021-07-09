import { useState } from "react";
import styles from "./navbar.module.css";
import Toggler from "./Toggler/Toggler";
import TogglerDropdownList from "./TogglerDropdownList/TogglerDropdownList";

import Link from "next/link";

const Navbar = () => {
  const [togglerStateOpen, setTogglerStateOpen] = useState(false);
  return (
    <nav className={`navbar bg-theme text-theme ${styles["nav-bg"]}`}>
      <div className="container-fluid">
        <Link passHref href="/">
          <span className={`navbar-brand ${styles["brand-title"]}`}>
            KayalvizhiJayavel
          </span>
        </Link>
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
