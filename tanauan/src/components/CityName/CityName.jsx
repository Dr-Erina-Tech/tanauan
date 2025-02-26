import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'; //This is needed for the movement of the texts
import styles from './CityName.module.css'; 
import { getImageUrl } from '../../utils';

const CityName = () => {
  const { scrollYProgress } = useScroll(); // Get scroll progress of the USER

  // Transform the scroll progress to move images smoothly
  const leftImageX = useTransform(scrollYProgress, [0, 0.5, 1], ['-100%', '-25%', '0%']); // Move left image to the left of center
  const centerImageX = useTransform(scrollYProgress, [0, 0.3, 1], ['-50%', '0%', '0%']); // Keep center image in the center for the MAIN LOGO
  const rightImageX = useTransform(scrollYProgress, [0, 0.5, 1], ['100%', '25%', '0%']); // Move right image to the right of center

  return (
    <div className={styles.cityNameContainer}>
      <motion.div
        style={{ x: leftImageX }} 
        className={styles.imageContainer}
      >
        <img 
          className={styles.leftImage}
          loading="lazy" 
          decoding="async" 
          src={getImageUrl('/city/left-image.svg')} 
          alt="City Logo" 
        />
      </motion.div>
   
      <motion.div
        style={{ x: centerImageX }} 
        className={styles.imageContainer}
      >
        <img 
          className={styles.centerImage}
          loading="lazy" 
          decoding="async" 
          src={getImageUrl('/city/center-image.svg')} 
          alt="City Center Logo" 
        />
      </motion.div>

      <motion.div
        style={{ x: rightImageX }} 
        className={styles.imageContainer}
      >
        <img 
          className={styles.rightImage}
          loading="lazy" 
          decoding="async" 
          src={getImageUrl('/city/right-image.svg')} 
          alt="City Logo2" 
        />
      </motion.div>
    </div>
  );
};

export default CityName;