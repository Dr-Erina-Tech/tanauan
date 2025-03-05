// DropdownMenu.js
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import styles from "./Navbar.module.css";
import dropdownStyles from "./NavbarDropdown.module.css";

const DropdownMenu = ({ dropdownItems }) => {
  return (
    <div className={styles.dropdownMenu}>
      {dropdownItems.map(({ text, image, description }) => (
        <div key={text} className={styles.dropdownItemContainer}>
          <Link
            to={`/${text.toLowerCase().replace(/\s+/g, '-')}`}
            className={styles.dropdownItem}
          >
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
          </Link>
          <hr className={dropdownStyles.dropdownDivider} />
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;