import React from 'react';
import styles from './otherHero.module.css'; // Import the CSS module

const OtherHero = ({ title, breadcrumb }) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <div className={styles.heroBreadcrumb}>
          <span>Home</span> <span> { '>' } </span> <span>{breadcrumb}</span>
        </div>
      </div>
    </div>
  );
};

export default OtherHero;
