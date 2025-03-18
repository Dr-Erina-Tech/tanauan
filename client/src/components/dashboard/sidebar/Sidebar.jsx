import React from 'react';
import { Link } from 'react-router-dom';
import { Home, FileText, Bell, Circle } from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebarTitle}>
          <div className={styles.sidebarTitleIcon}>
            <Circle className={styles.icon} />
          </div>
        <div className={styles.titleText}>
          <div className={styles.mainTitle}>Tanauan</div>
          <div className={styles.subTitle}>City</div>
        </div>
      </div>
      <nav>
        <ul>  
          <li>
            <Link to="/home" className={`${styles.sidebarLink} ${styles.activeLink}`}>
              <FileText className={styles.icon} />Dashboard
            </Link>
            <ul className={styles.submenu}>
              <li>
                <Link to="/create" className={styles.submenuLink}>Create New </Link>
              </li>
              <li>
                <Link to="/modify" className={styles.submenuLink}>Modify Deal</Link>
              </li>
              <li>
                <Link to="/pipeline" className={styles.submenuLink}>Pipeline</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/notifications" className={styles.sidebarLink}>
              <Bell className={styles.icon} /> Notifications
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
