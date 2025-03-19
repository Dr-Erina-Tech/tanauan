import React from 'react';
import styles from './HomeContent.module.css'; // Use this for styling

const HomeContent = () => {
  return (
    <div className={styles.dashboardContent}>
      <div className={styles.cardWrapper}>
        {/* Row 1: Overview Cards */}
        <div className={styles.card}>
          <h3>Population Overview</h3>
          <p>Total Population: 200,000</p>
          <p>Male: 100,000</p>
          <p>Female: 100,000</p>
        </div>
        <div className={styles.card}>
          <h3>Business Overview</h3>
          <p>Total Businesses: 5,000</p>
          <p>New Businesses: 50</p>
        </div>
        <div className={styles.card}>
          <h3>Revenue</h3>
          <p>Total Revenue: ₱150,000</p>
        </div>

        {/* Row 2: More Overview Cards */}
        <div className={styles.card}>
          <h3>Tourism</h3>
          <p>Visitors this Month: 3,000</p>
          <p>Tourist Spots: 10</p>
        </div>
        <div className={styles.card}>
          <h3>Senior Citizens & PWD</h3>
          <p>Senior Citizens: 15,000</p>
          <p>PWD: 5,000</p>
        </div>
      </div>

      {/* Graph Section */}
      <div className={styles.graphSection}>
        <h3>City Population Growth</h3>
        {/* Insert your chart component here */}
        <div className={styles.chart}>[Chart Goes Here]</div>
      </div>
    </div>
  );
};

export default HomeContent;
