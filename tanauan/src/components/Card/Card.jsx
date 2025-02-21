import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, description, image }) => {
  return (
    <div className={styles.card}>
      {image && <img className={styles.cardImage} src={image} alt={title} />}
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
        <button className={styles.cardButton}>Learn More</button>
      </div>
    </div>
  );
};

export default Card;
