import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, HelpCircle, Phone, ChevronRight } from "lucide-react";

import styles from "./Navbar.module.css";
import dropdownStyles from "./NavbarDropdown.module.css"; //separate style for dropdown style
import SearchBox from "../SearchBox/SearchBox";
import { getImageUrl } from "../../utils";  

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dateTime, setDateTime] = useState("");

  const navItems = [
    { 
      text: "The City", 
      hasDropdown: true, 
      dropdownItems: [
        { text: "Barangays", image: getImageUrl("./Navbar/barangay.svg"), description: "Learn about the different barangays." },
        { text: "News and Publication", image: getImageUrl("./Navbar/news.svg"), description: "Stay updated with the latest news." }
      ] 
    },
    { 
      text: "Government", 
      hasDropdown: true, 
      dropdownItems: [
        { text: "Vision / Mission", image: getImageUrl("./Navbar/mission.svg"), description: "Our vision and mission statements." },
        { text: "City Officials", image: getImageUrl("./Navbar/officials.svg"), description: "Meet the city officials." },
        { text: "Departments", image: getImageUrl("./Navbar/department.svg"), description: "Explore various city departments." }
      ] 
    },
    { 
      text: "City Transactions", 
      hasDropdown: true, 
      dropdownItems: [
        { text: "CSWD Services", image: getImageUrl("./Navbar/tanauan.svg"), description: "Services of CSWD"},
        { text: "City Planning", image: getImageUrl("./Navbar/cityPlan.svg"), description: "City planning" },
        { text: "Senior Citizen ID and Benefits", image: getImageUrl("./Navbar/senior.svg"), description: "City planning" },
        { text: "PWD ID and Services", image: getImageUrl("./Navbar/pwd.svg"), description: "City planning" }
      ] 
    },
    { 
      text: "Business", 
      hasDropdown: true, 
      dropdownItems: [
        { text: "Tanauan E-Services", image: getImageUrl("./Navbar/eService.svg"), description: "City planning" },
      ] 
    },
    { 
      text: "Transparency Report", 
      hasDropdown: true, 
      dropdownItems: [
        { text: "Bids and Awards", image: getImageUrl("./Navbar/award.svg"), description: "City planning" },
        { text: "Asessor's", image: getImageUrl("./Navbar/assesors.svg"), description: "City planning" },
        { text: "Full Diclosure Report", image: getImageUrl("./Navbar/report.svg"), description: "City planning" }
      ] 
    },
    { 
      text: "Tourism", 
      hasDropdown: false, 
    },
 
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
            {navItems.map(({ text, hasDropdown, dropdownItems }) => (
              <div key={text} className={styles.navItem}>
                <Link
                  to={`/${text.toLowerCase().replace(/\s+/g, '-')}`}
                  className={styles.linkAnimation}
                >
                  {text}
                  {hasDropdown && <span className={dropdownStyles.arrowContainer}><ChevronRight size={16} className={dropdownStyles.dropdownArrow} /></span>}
                </Link>
                {hasDropdown && (
                  <div className={styles.dropdownMenu}>
                    {dropdownItems.map(({ text, image, description }) => (
                      <div key={text} className={styles.dropdownItemContainer}>
                        <Link
                          to={`/${text.toLowerCase().replace(/\s+/g, '-')}`}
                          className={styles.dropdownItem}
                        >
                          {/*This is the container for image-text only*/}
                          <div className={dropdownStyles.imageTextContainer}>
                            <img src={image} alt={`${text} icon`} className={dropdownStyles.dropdownIcon} />
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
