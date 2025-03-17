import React from 'react';
import styles from './features.module.css';
import { ArrowRight } from "lucide-react";
import homeData from '../../pages/Home/homeData';

const Features = ({ title, subtitle, dividerText }) => {
  return (
    <div className={styles.featureContainer}>
      <div className={styles.titleContainer}>
        <h1 className={`display-4 m-4 ${styles.title}`}>{title}</h1>
      </div>
      <div className={styles.subtitleContainer}>
        <p className={`lead ${styles.subtitle}`}>
          {subtitle}
        </p>
      </div>
      <div className={styles.divider}>
        <div className={styles.dividerLine}></div>
        <span className={styles.dividerText}>{dividerText}</span>
        <div className={styles.dividerLine}></div>
      </div>
      <div className="row g-0"> {/* g means gutter */}
        {/* Use homeData.features to access the array */}
        {homeData.features.map(feature => (
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
              <div className={styles.readMoreContainer}>
                <span className={styles.readMoreText}>Read More</span>
                <ArrowRight className={styles.arrowIcon} />
              </div>
              <div className={styles.circleContainer}>
                <div className={styles.circle}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
