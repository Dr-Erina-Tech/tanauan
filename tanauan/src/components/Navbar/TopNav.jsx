//TopNav.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, HelpCircle } from "lucide-react";
import SearchBox from "../SearchBox/SearchBox";
import { getImageUrl } from "../../utils";  
import styles from "./Navbar.module.css";

const TopNav = ({ setMenuOpen, menuOpen }) => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setDateTime(now.toLocaleString("en-PH", options));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.topnavContainer}>
      <Menu
        size={28}
        className={styles.menuIcon}
        onClick={() => setMenuOpen(!menuOpen)} //FOR RESPONSIVENESS
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
