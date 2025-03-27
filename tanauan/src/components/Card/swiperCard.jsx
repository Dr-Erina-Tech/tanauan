import React from 'react';
import PropTypes from 'prop-types'; // For prop validation
import styles from './swiperCard.module.css'; // Import styles from swiperCard

const SwiperCard = ({ imgSrc, altText, title, description }) => {
  return (
    <div className={`card ${styles.card}`}>
      <img
        src={imgSrc}
        alt={altText}
        className={`${styles.image} card-img-top mx-auto`}
      />
      <div className="card-body">
        <h5 className={`card-title ${styles.title}`}>{title}</h5>
        <p className={`card-text ${styles.description}`}>{description}</p>
      </div>
    </div>
  );
};

// Prop types to ensure correct data types
SwiperCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SwiperCard;
