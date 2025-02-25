import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, HelpCircle, ChevronDown } from "lucide-react";
import styles from "./Navbar.module.css";
import SearchBox from "../SearchBox/SearchBox";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { text: "Home", hasDropdown: false },
    { text: "The City", hasDropdown: true, dropdownItems: ["Barangays", "News and Publication"] },
    { text: "Government", hasDropdown: true, dropdownItems: ["Vision / Mission", "City Officials", "Departments"] },
    { text: "City Transactions", hasDropdown: true, dropdownItems: ["CSWD Services", "City Planning", "Senior Citizen ID and Benefits", "PWD ID and Services"] },
    { text: "Business", hasDropdown: true, dropdownItems: ["Tanauan E-Services"] },
    { text: "Transparency Report", hasDropdown: true, dropdownItems: ["Bids and awards", "Assessor's", "Full Disclosure Report"] },
    { text: "Tourism", hasDropdown: false },
    { text: "Careers", hasDropdown: true, dropdownItems: ["Job Fair"] },
  ];


  return (
    <>
      <div className={styles.topnavContainer}>
        <div className={styles.navLeft}>
          <SearchBox className={styles.searchBox} />
        </div>
        <img
          className={styles.logoImg}
          src={getImageUrl("./Navbar/tanauan.svg")}
          alt="Tanauan City"
        />
        <div className={styles.navRight}>
          <Link to="/" className={styles.loginButton}>
            Login
          </Link>
          <Link to="/help" className={styles.helpLink}>
            <HelpCircle size={16} className={styles.helpIcon} /> Help
          </Link>
        </div>
        <Menu
          size={28}
          className={styles.menuIcon}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      <nav>
        <div className={styles.navContainer}>
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
                {hasDropdown &&  (   
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
