import React from 'react';
import styles from './Header.module.css'; // Use this for styling

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1>Dashboard - Tanauan City</h1>
      </div>
      <div className={styles.right}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search anything..." />
        </div>
        <div className={styles.icons}>
          <div className={styles.icon}>🔔</div>
          <div className={styles.icon}>⚙️</div>
          <div className={styles.profile}>
            <img
              src="https://via.placeholder.com/40" 
              alt="Profile"
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
