import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, HelpCircle, Phone, ChevronRight } from "lucide-react";

import styles from "./Navbar.module.css";
import TopNav from "./TopNav";
import navItems from "./navItems";
import { getImageUrl } from "../../utils"; 
import dropdownStyles from "./Dropdown.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); //keep track of which dropdown open

  //this code is for the nav item header not to go to another page. only toggles dropdown
  const handleDropdownToggle = (index, hasDropdown) => {
    if (hasDropdown) {
       setOpenDropdown(openDropdown === index ? null: index); //toggle the dropdown
     }
  };

  const handleClick = (event, hasDropdown) => {
    if (hasDropdown) {
      event.preventDefault(); //prevent navigation for dropdown items
    }
  }
  return (
    <>
       <TopNav setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <nav>
        <div className={styles.navContainer}>
        <Link to="/home">
          <img
            className={styles.logoImg}
            src={getImageUrl("./Navbar/tanauan.svg")}
            alt="Tanauan City"
          />
        </Link>

          <div className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
            {navItems.map(({ text, hasDropdown, dropdownItems, index }) => (
              <div key={text} className={styles.navItem}>
                {/*main navigation items */}
                <a 
                  href="#"
                  onClick={(event) => handleClick(event, hasDropdown)}
                  onMouseEnter={() => handleDropdownToggle(index, hasDropdown)}
                  classNamw={styles.linkAnimation} 
                  >
                  {text}
                </a>

                {/*dropdown tems */}
                {hasDropdown && openDropdown == index && (
                  <div className={styles.dropdownMenu}>
                    {dropdownItems.map(({ text, image, description }) => (
                      <div key={text} className={styles.dropdownItemContainer}>
                        <Link
                          to={`/${text.toLowerCase().replace(/\s+/g, '-')}`}
                          className={styles.dropdownItem}
                        >
                          {/*This is the container for image-text only*/}
                          <div className={dropdownStyles.imageTextContainer}>
                            <img 
                              src={image} 
                              alt={`${text} icon`} 
                              className={dropdownStyles.dropdownIcon} 
                            />
                            <div className={dropdownStyles.descriptionContainer}>
                              <strong>{text}</strong>
                              <span className={dropdownStyles.dropdownDescription}>{description}</span>
                            </div>
                            <span className={dropdownStyles.arrowContainer}>
                              <ChevronRight size={16} className={dropdownStyles.dropdownArrow} />
                            </span>
                          </div>
                             {/*This is the end of container for image-text only*/}
                        </Link>
                        <hr className={dropdownStyles.dropdownDivider} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={styles.contactUsContainer}>
            <Link to="/contact-us" className={styles.contactUsButton}>
              <Phone size={16} /> Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
