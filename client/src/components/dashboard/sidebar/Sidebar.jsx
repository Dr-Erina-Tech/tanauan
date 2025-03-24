import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Circle, ChevronDown, LogOut } from 'lucide-react';
import styles from './Sidebar.module.css';
import sidebarData from './sidebarData';  // Data for sidebar

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
        {sidebarData.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {section.sectionTitle && <div className={styles.sectionTitle}>{section.sectionTitle}</div>}
            <ul className={styles.navItems}>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className={styles.navItem}>
                  <Link to={item.path} className={styles.navLink}>
                    <item.icon className={styles.icon} />
                    {item.title}
                  </Link>

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

      {/* Logout section */}
      <div className={styles.logout}>
        <Link to="/logout" className={styles.navLink}>
          <LogOut className={styles.icon} />
          Logout
        </Link>
      </div>

      {/* Footer section inside sidebar */}
      <div className={styles.footerWrapper}>
        <hr className={styles.footerDivider} />
        <div className={styles.footer}>
          <div className={styles.footerMainText}>Tanauan City©</div>
          <div className={styles.footerSubText}>All Rights Reserved 2025</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
