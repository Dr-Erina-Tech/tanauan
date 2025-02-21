import React from 'react';
import styles from './Hero.module.css'; // Correctly import the CSS module
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
  
      <div className={`text-black p-5 ${styles.leftTextContainer}`}>
  
        <h1 className={styles.heading}> 
          <span className={styles.cityName}>Tanauan City</span> Portal
        </h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Rerum quis accusantium distinctio, minima consectetur sunt 
          consequatur expedita doloremque, quas sed
        </p>
        <button className={`btn btn-outline-danger mt-2 ${styles.btnAcc}`}>
          <i className="bi bi-person-plus p-1"></i> Create your Tanauan GOV Account
          <i className="bi bi-arrow-up-right ps-2"></i>
        </button>
        <p className={`mt-2 ps-2 ${styles.loginText}`}>
          Already have an account? <Link to="/login" className={styles.loginLink}>Login here.</Link>
        </p>
      </div>
    </div>
  );
};

export default Hero;