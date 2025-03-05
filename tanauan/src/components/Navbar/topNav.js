// TopNav.js
import React from "react";
import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";
import styles from "./Navbar.module.css";
import SearchBox from "../SearchBox/SearchBox";
import { getImageUrl } from "../../utils";

const TopNav = ({ dateTime, setMenuOpen }) => {
  return (
    <div className={styles.topnavContainer}>
      <Menu
        size={28}
        className={styles.menuIcon}
        onClick={() => setMenuOpen(prev => !prev)}
      />
      <div className={styles.topLeft}></div>
      <h1 className={styles.headingNav}>City Government of Tanauan</h1>
      <div className={styles.topRight}>
        <img
          src={getImageUrl("./Navbar/philippines-flag.svg")}
          alt="Philippine Flag"
          className={styles.flagIcon}
        />
        <div className={styles.separator}></div>
        <span className={styles.dateTime}>{dateTime}</span>
        <SearchBox className={styles.searchBox} />
        <Link to="/help" className={styles.helpLink}>
          <HelpCircle size={16} className={styles.helpIcon} /> Help
        </Link>
      </div>
    </div>
  );
};

export default TopNav;