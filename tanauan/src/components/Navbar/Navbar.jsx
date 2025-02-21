import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import styles from "./Navbar.module.css";
import SearchBox from "../SearchBox/SearchBox";
import assets from "../../assets/Assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.topnavContainer}>
        <img className={styles.logoImg} src={assets.Logo} alt="Tanauan City" />
        <div className={styles.navRight}>
          <SearchBox />
          <Link to="/" className={styles.loginButton}>
            Login
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
          {/* Navigation Links */}
          <div className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
            {[
              "Home",
              "The City",
              "Government",
              "City Transactions",
              "Business",
              "Transparency Report",
              "Tourism",
              "Careers",
            ].map((text) => (
              <Link
                key={text}
                to={`/${text.toLowerCase()}`}
                className={styles.linkAnimation}
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
