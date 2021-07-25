import { useState } from "react";
import styles from "./navbar.module.css";
import Toggler from "./Toggler/Toggler";
import TogglerDropdownList from "./TogglerDropdownList/TogglerDropdownList";

import Link from "next/link";

const Navbar = () => {
  const [togglerStateOpen, setTogglerStateOpen] = useState(false);

  return (
    <nav className={`navbar fixed-top bg-theme text-theme ${styles["nav-bg"]}`}>
      <div className="container-fluid">
        <Link passHref href="/">
          <span
            className={`navbar-brand ${styles["brand-title"]}`}
            data-aos="fade-right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill={"#fff"}
              className="bi bi-house-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fillRule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
          </span>
        </Link>
        {/* <Link passHref href="/publications">
          <button
            className={`btn btn-light ${styles["publications-link"]}`}
            data-aos="fade-left"
          >
            Publications
          </button>
        </Link> */}
        <Toggler
          onMouseEnter={() => {
            setTogglerStateOpen(true);
          }}
          onClick={() => {
            togglerStateOpen
              ? setTogglerStateOpen(false)
              : setTogglerStateOpen(true);
          }}
          dataAos="fade-left"
        />
        <TogglerDropdownList
          style={{ visibility: togglerStateOpen ? "visible" : "hidden" }}
          onMouseEnter={() => {
            setTogglerStateOpen(true);
          }}
          onMouseLeave={() => {
            setTogglerStateOpen(false);
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
