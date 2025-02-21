import React from "react";
import styles from "./FutureCard.module.css";

const FutureCard = ({ title, description, image }) => {
  return (
    <>
      {/* Overflowing Box with Image container */}
      <div className={styles.card}>
        <div className={styles.overflowBox}>
          <div className={styles.imageContainer}>
            {image && (
              <img className={styles.overflowImage} src={image} alt={title} />
            )}
          </div>
        </div>
        {/* Card Content */}
        <div className={styles.cardContent}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default FutureCard;
