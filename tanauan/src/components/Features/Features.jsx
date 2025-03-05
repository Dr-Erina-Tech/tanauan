import React from 'react';
import styles from './features.module.css';
import featuresData from './featuresData'; // Import the features data

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={`display-4 m-4 ${styles.title}`}>Featured Community Services and Resources</h1>
      </div>
      <div className={styles.subtitleContainer}>
        <p className={`lead ${styles.subtitle}`}>
          Explore a variety of essential services and programs designed to enhance your experience in our community, from the latest news and events to helpful online resources and visitor information.
        </p>
      </div>
      <div className={styles.divider}>
        <div className={styles.dividerLine}></div>
        <span className={styles.dividerText}>SERVICES WE OFFER</span>
        <div className={styles.dividerLine}></div>
      </div>
      <div className="row g-0"> {/* g means gutter */}
        {featuresData.map(feature => (
          <div className="col-md-6 col-lg-3" key={feature.id}>
            <div className={styles.featureCard}>
              <img
                src={feature.imageUrl}
                alt={feature.altText}
                className={styles.featureIcon}
                width="50"
                height="50"
              />
              <h2 className={`h5 ${styles.featureCardTitle}`}>{feature.title}</h2>
              <p className={styles.featureDescription}>{feature.description}</p>
              <div className={styles.buttonContainer}> {/* Flex container for button */}
                <button className={styles.featureButton}>Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;