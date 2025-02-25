import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, HelpCircle, ChevronDown } from "lucide-react";
import styles from "./Navbar.module.css";
import SearchBox from "../SearchBox/SearchBox";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dateTime, setDateTime] = useState("");

  const navItems = [
    { text: "Home", hasDropdown: false },
    { text: "The City", hasDropdown: true, dropdownItems: ["Barangays", "News and Publication"] },
    { text: "Government", hasDropdown: true, dropdownItems: ["Vision / Mission", "City Officials", "Departments"] },
    { text: "City Transactions", hasDropdown: true, dropdownItems: ["CSWD Services", "City Planning", "Senior Citizen ID and Benefits", "PWD ID and Services"] },
    { text: "Business", hasDropdown: true, dropdownItems: ["Tanauan E-Services"] },
    { text: "Transparency Report", hasDropdown: true, dropdownItems: ["Bids and awards", "Assessor's", "Full Disclosure Report"] },
    { text: "Tourism", hasDropdown: false },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" };
      setDateTime(now.toLocaleString("en-PH", options));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.topnavContainer}>
        <Menu
          size={28}
          className={styles.menuIcon}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {/* Heading with margin-right */}
        <div className={styles.topLeft}></div>
        <h1 className={styles.headingNav}>City Government of Tanauan</h1>

        {/* Philippine Flag, Date, and Search/Help on the right */}
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

      <nav>
        <div className={styles.navContainer}>
          {/* Logo on the left */}
          <img
            className={styles.logoImg}
            src={getImageUrl("./Navbar/tanauan.svg")}
            alt="Tanauan City"
          />

          {/* Navigation Links */}
          <div className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
            {navItems.map(({ text, hasDropdown, dropdownItems }) => (
              <div key={text} className={styles.navItem}>
                <Link
                  to={`/${text.toLowerCase().replace(/\s+/g, '-')}`}
                  className={styles.linkAnimation}
                >
                  {text}
                  {hasDropdown && (
                    <ChevronDown
                      size={16}
                      className={styles.dropdownIcon}
                    />
                  )}
                </Link>
                {hasDropdown && (
                  <div className={styles.dropdownMenu}>
                    {dropdownItems.map((item) => (
                      <Link
                        key={item}
                        to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className={styles.dropdownItem}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
