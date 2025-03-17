import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, ChevronRight, ChevronLeft } from "lucide-react";
import styles from "./Navbar.module.css";
import TopNav from "./TopNav";
import navItems from "./navItems";
import { getImageUrl } from "../../utils";
import dropdownStyles from "./Dropdown.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeNav, setActiveNav] = useState(null); // Active nav for mobile

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as per your design
    };
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDropdownToggle = (index, hasDropdown) => {
    if (hasDropdown) {
      setOpenDropdown(openDropdown === index ? null : index);
    }
  };

  const handleClick = (event, hasDropdown) => {
    if (hasDropdown) {
      event.preventDefault();
      if (isMobile) {
        setActiveNav(navItems[event.target.innerText]); // For mobile, open the clicked nav container
      }
    }
  };

  const handleBackToNav = () => {
    setActiveNav(null); // Go back to parent nav items
  };

  return (
    <>
      <TopNav setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <nav>
        <div className={styles.navContainer}>
          <div className={styles.logoContainer}>
            <Link to="/home">
              <img
                className={styles.logoImg}
                src={getImageUrl("./Navbar/tanauan.svg")}
                alt="Tanauan City"
              />
            </Link>
          </div>

            {/* Regular Nav for Desktop */}
            <div className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
              {!isMobile &&
                navItems.map(({ text, hasDropdown, dropdownItems }, index) => (
                  <div key={text} className={styles.navItem}>
                    <a
                      href="#"
                      onClick={(event) => handleClick(event, hasDropdown)}
                      onMouseEnter={() => handleDropdownToggle(index, hasDropdown)}
                      className={styles.linkAnimation}
                    >
                      {text}
                    </a>
                    {hasDropdown && openDropdown === index && (
                      <div className={styles.dropdownMenu}>
                        {dropdownItems.map(({ text, image, description }) => (
                          <div key={text} className={styles.dropdownItemContainer}>
                            <Link
                              to={`/${text.toLowerCase().replace(/\s+/g, "-")}`}
                              className={styles.dropdownItem}
                            >
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
                                <ChevronRight size={16} className={dropdownStyles.dropdownArrow} />
                              </div>
                            </Link>
                            <hr className={dropdownStyles.dropdownDivider} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

              {/* Mobile-specific Navigation */}
              {isMobile && (
                <>
                  {/* Parent Navigation (default) */}
                  {activeNav === null &&
                    navItems.map(({ text, hasDropdown }, index) => (
                      <div key={text} className={styles.navItem}>
                        <a
                          href="#"
                          onClick={(event) => handleClick(event, hasDropdown)}
                          className={styles.linkAnimation}
                        >
                          {text}
                          <ChevronRight size={16} className={styles.arrowIcon} /> {/* Arrow Icon */}
                        </a>
                      </div>
                    ))}

                  {/* Dropdown Navigation (on parent click) */}
                  {activeNav !== null && (
                    <div className={styles.dropdownContainer}>
                      <button className={styles.backButton} onClick={handleBackToNav}>
                        <ChevronLeft size={16} /> Back
                      </button>
                      {activeNav.dropdownItems.map(({ text, image, description }) => (
                        <div key={text} className={styles.dropdownItemContainer}>
                          <Link
                            to={`/${text.toLowerCase().replace(/\s+/g, "-")}`}
                            className={styles.dropdownItem}
                          >
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
                            </div>
                          </Link>
                          <hr className={dropdownStyles.dropdownDivider} />
                        </div>
                      ))} 
                    </div>
                )}
              </>
            )}

            <div className={styles.contactUsContainer}>
              <Link to="/contact-us" className={styles.contactUsButton}>
                <Phone size={16} /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
