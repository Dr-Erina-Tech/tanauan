import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

const HeroContainer = () => {
  return (
    <div className={`text-white p-5 ${styles.leftTextContainer}`}>
      <img 
        src={getImageUrl('hero/hero-vector.svg')} 
        alt="Vector" 
        className={styles.vectorImage}
      />
      <h1 className={styles.heading}> 
        <span className={styles.cityName}>Tanauan City</span> Portal
      </h1>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Rerum quis accusantium distinctio, minima consectetur sunt 
        consequatur expedita doloremque, quas sed
      </p>
      <button className={`btn btn-outline-warning mt-2 ${styles.btnAcc}`}>
        <i className="bi bi-person-plus p-1"></i> Create your Tanauan GOV Account
        <i className="bi bi-arrow-up-right ps-2"></i>
      </button>
      <p className={`mt-2 ${styles.loginText}`}>
        Already have an account? <Link to="/login" className="text-white">Login here.</Link>
      </p>
    </div>
  );
};

export default HeroContainer;