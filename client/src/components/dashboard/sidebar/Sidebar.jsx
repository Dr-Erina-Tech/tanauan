import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Circle, ChevronDown, LogOut } from 'lucide-react';
import styles from './Sidebar.module.css';
import sidebarData from './sidebarData';

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionTitle) => {
    setOpenSections(prevState => ({
      ...prevState,
      [sectionTitle]: !prevState[sectionTitle]
    }));
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Circle className={styles.logoIcon} />
        <div className={styles.logoText}>
          <div className={styles.logoMain}>Tanauan</div>
          <div className={styles.logoSub}>City</div>
        </div>
      </div>

      <nav className={styles.navSection}>
        {sidebarData.map((section, index) => (
          <div key={index}>
            {section.sectionTitle && <div className={styles.sectionTitle}>{section.sectionTitle}</div>}
            <ul className={styles.navItems}>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className={styles.navItem}>
                  <div
                    className={styles.navLink}
                    onClick={() => item.submenu && toggleSection(item.title)}
                  >
                    <item.icon className={styles.icon} />
                    {item.title}
                    {item.submenu && <ChevronDown className={styles.dropdownIcon} />}
                  </div>

                  {item.submenu && openSections[item.title] && (
                    <ul className={styles.submenu}>
                      {item.submenu.map((submenuItem, submenuIndex) => (
                        <li key={submenuIndex}>
                          <Link to={submenuItem.path} className={styles.submenuLink}>
                            {submenuItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Logout at the bottom */}
      <div className={styles.logout}>
        <Link to="/logout" className={styles.navLink}>
          <LogOut className={styles.icon} />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
