// HeroCard.jsx
import React, { useState, useEffect } from 'react';
import styles from './HeroCard.module.css'; 
import { getImageUrl } from '../../utils'; 

// Array of content for the HeroCard
const contentArray = [
  {
    image: getImageUrl('./hero/city1.jpg'), 
    title: 'Welcome to Tanauan City',
    description: 'Discover the beauty and opportunities that await you in our vibrant city.',
  },
  {
    image: getImageUrl('./hero/city2.webp'), 
    title: 'Explore Our Culture',
    description: 'Experience the rich culture and heritage of Tanauan City.',
  },
  {
    image: getImageUrl('./hero/city3.jpg'), 
    title: 'Enjoy Our Festivals',
    description: 'Join us in celebrating our local festivals and events.',
  },
];

const HeroCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true); // Start fading out the content
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
        setFadeOut(false); // Reset fade out state after changing content
      }, 500); // Duration of the fade out
    }, 8000); // Change content every 8 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const { image, title, description } = contentArray[currentIndex];

  return (
    <div className={styles.heroContainer}>
      <div className={`${styles.slideIn} ${fadeOut ? styles.slideOut : ''}`}>
        <img 
          src={image} 
          alt={title} 
          className={styles.cardImage} 
        />
        <div className={`${styles.heroCard} ${fadeOut ? styles.fadeOut : ''}`}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;