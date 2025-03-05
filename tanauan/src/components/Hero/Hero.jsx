import React from 'react';
import styles from './Hero.module.css'; // CSS module for styling

import Socials from '../Socials/Socials'; // Social links component
import { UserPlus, ArrowUpRight } from 'lucide-react'; // Icons
import HeroCard from './HeroCard'; // Hero Card component for the right part of the hero

const Hero = ({ name, description, buttonText, onButtonClick }) => {
  return (
    <div className={styles.heroContainer}>
      {/* Flex container for left text and hero card */}
      <div className={styles.contentContainer}>
        {/* Hero Content Section */}
        <div className={`text-black p-5 ${styles.leftTextContainer}`}>
          <h1 className={styles.heading}>
            <span className={styles.name}>{name}</span>
          </h1>
          <p className={styles.paragraph}>{description}</p>
          <button className={`btn mt-2 ${styles.btnStart}`} onClick={onButtonClick}>
            <UserPlus className="p-1" /> {buttonText}
            <ArrowUpRight className="ps-2" />
          </button>
        </div>

        {/* Hero Card Section with Animation */}
        <div className={styles.cardContainer}>
          <HeroCard />
        </div>
      </div>

      {/* Social Links Section */}
      <Socials />
    </div>
  );
};

export default Hero;
