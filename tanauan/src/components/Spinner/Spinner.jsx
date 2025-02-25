import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <PuffLoader color="#CC5500" size={60} />
    </div>
  );
};

export default Spinner;