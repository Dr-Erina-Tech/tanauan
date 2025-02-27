import React, { useEffect, useRef } from 'react';
import styles from './Steps.module.css';
import stepsData from './stepsData'; // Import the steps data
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//Code optimized for animation
gsap.registerPlugin(ScrollTrigger);

// StepCard component
const StepCard = ({ image, imgAlt, title, description, isVisible }) => (
  <div className={`${styles.step} ${isVisible ? styles.visible : styles.hidden}`}>
    <img src={image} alt={imgAlt} className={styles['step-image']} />
    <h3 className={styles['step-title']}>{title}</h3>
    <p className={styles['step-description']}>{description}</p>
  </div>
);

// Reusable animation function to optimize repeated animations
const animateStepContent = (element, image, title, description) => {
  gsap.fromTo(
    image,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, scrollTrigger: { trigger: element, start: 'top 80%', end: 'top 30%', toggleActions: 'play none none reverse' } }
  );
  
  gsap.fromTo(
    title,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, delay: 0.2, scrollTrigger: { trigger: element, start: 'top 80%', end: 'top 30%', toggleActions: 'play none none reverse' } }
  );

  gsap.fromTo(
    description,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, delay: 0.4, scrollTrigger: { trigger: element, start: 'top 80%', end: 'top 30%', toggleActions: 'play none none reverse' } }
  );
};

const Steps = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const stepsRefs = useRef([]);

  useEffect(() => {
    // Title with pop effect
    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1.05,
        duration: 0.5,
        ease: 'bounce.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Subtitle animation (fade-in)
    gsap.fromTo(
      subtitleRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 0.5,
        duration: 0.6,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 80%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Steps animation (image and description)
    stepsRefs.current.forEach((step) => {
      const image = step.querySelector(`.${styles['step-image']}`);
      const title = step.querySelector(`.${styles['step-title']}`);
      const description = step.querySelector(`.${styles['step-description']}`);

      // Use reusable animation function
      animateStepContent(step, image, title, description);
    });
  }, []);

  return (
    <div className={styles.stepsContainer}>
      <h2 ref={subtitleRef} className={styles.subtitle}>
        Sign up now
      </h2>
      <h1 ref={titleRef} className={styles.title}>
        Sign up in 6 simple steps
      </h1>

      {/* Horizontal line for all rows */}
      <div className={styles['middle-line-top']}></div>
      <div className={styles['middle-line-bottom']}></div>

      {/* Steps are grouped in rows */}
      <div className={styles.steps}>
        {stepsData.map((step, index) => (
          <div
            ref={(el) => (stepsRefs.current[index] = el)}
            key={index}
            className={styles.stepWrapper}
          >
            <StepCard
              image={step.image}
              imgAlt={step.imgAlt}
              title={step.title}
              description={step.description}
              isVisible={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
