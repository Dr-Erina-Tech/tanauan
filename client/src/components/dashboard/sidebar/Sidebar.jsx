import React from 'react';
import { Link } from 'react-router-dom';
import { Home, FileText, Bell } from 'lucide-react';
import styles from './Sidebar.module.css'; // Assuming the styles are coming from utils

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav>
        <ul>  
          <li>
            <Link to="/dashboard" className={styles.sidebarLink}>
              <Home className={styles.icon} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/reports" className={styles.sidebarLink}>
              <FileText className={styles.icon} /> Reports
            </Link>
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
