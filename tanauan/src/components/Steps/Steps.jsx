import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from "./Steps.module.css";
import stepsData from './stepsData'; // Import the steps data

const StepCard = ({ image, imgAlt, title, description, isVisible }) => (
  <div className={`${styles.step} ${isVisible ? styles.visible : styles.hidden}`}>
    <img src={image} alt={imgAlt} className={styles['step-image']} />
    <h3 className={styles['step-title']}>{title}</h3>
    <p className={styles['step-description']}>{description}</p>
  </div>
);

const Steps = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.1,
    triggerOnce: false, // This Allows animation on both enter and exit
  });

  const { ref: subtitleRef, inView: subtitleInView } = useInView({
    threshold: 0.1,
    triggerOnce: false, 
  });

  return (
    <div className={styles.stepsContainer}>
      <h2 ref={subtitleRef} className={`${styles.subtitle} ${subtitleInView ? styles.visible : styles.hidden}`}>
        Sign up now
      </h2>
      <h1 ref={titleRef} className={`${styles.title} ${titleInView ? styles.visible : styles.hidden}`}>
        Sign up in 6 simple steps
      </h1>
      <div className={styles.steps}>
        {stepsData.map((step, index) => {
          const { ref, inView } = useInView({
            threshold: 0.1,
            triggerOnce: false,
          });

          return (
            <div ref={ref} key={index}>
              <StepCard
                image={step.image}
                imgAlt={step.imgAlt}
                title={step.title}
                description={step.description}
                isVisible={inView}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Steps;