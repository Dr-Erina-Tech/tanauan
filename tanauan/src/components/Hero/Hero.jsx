import React from 'react';
import styles from './Hero.module.css'; // CSS module for styling
import { Link } from 'react-router-dom'; // For navigation
import Socials from '../Socials/Socials'; // Social links component
import { UserPlus, ArrowUpRight } from 'lucide-react'; // Icons


const Hero = () => {
  return (
    <div className={styles.heroContainer}>

      {/* Hero Content Section */}
      <div className={`text-black p-5 ${styles.leftTextContainer}`}>
        <h1 className={styles.heading}>
          <span className={styles.cityName}>Tanauan City</span> Portal
        </h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Rerum quis accusantium distinctio, minima consectetur sunt 
          consequatur expedita doloremque, quas sed.
        </p>
        <button className={`btn mt-2 ${styles.btnStart}`}>
          <UserPlus className="p-1" /> Get Started
          <ArrowUpRight className="ps-2" />
        </button>
        <p className={`mt-2 ps-2 ${styles.loginText}`}>
          Already have an account? 
        </p>
      </div>

      {/* Social Links Section */}
      <Socials />
      
    </div>
  );
};

export default Hero;
