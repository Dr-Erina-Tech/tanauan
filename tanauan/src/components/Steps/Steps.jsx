import React, { useEffect, useRef, useState } from 'react';
import styles from './Steps.module.css';
import stepsData from './stepsData';
import { animateElement, animateTitleAndSubtitle } from '../../animations/scrollPopAnimations'; //separate scroll animation
import useIntersectionObserver from '../../hooks/useIntersectionObserver'; // custom hook for my scroll 

const StepCard = ({ image, imgAlt, title, description }) => (
  <div className={styles.step}>
    <img src={image} alt={imgAlt} className={styles['step-image']} />
    <h3 className={styles['step-title']}>{title}</h3>
    <p className={styles['step-description']}>{description}</p>
  </div>
);

const Steps = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const stepsRefs = useRef([]);
  const lineTopRef = useRef(null);
  const lineBottomRef = useRef(null);

  // State to track scroll direction
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingDown(currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Reusable animation for title and subtitle
    animateTitleAndSubtitle(titleRef, subtitleRef);

    // Animate each step's content
    stepsRefs.current.forEach((step, index) => {
      const image = step.querySelector(`.${styles['step-image']}`);
      const title = step.querySelector(`.${styles['step-title']}`);
      const description = step.querySelector(`.${styles['step-description']}`);

      animateElement(image, { trigger: step, delay: 0 });
      animateElement(title, { trigger: step, delay: 0.2 });
      animateElement(description, { trigger: step, delay: 0.4 });
    });
  }, []);

  // Intersection observer callback to trigger line animations
  const handleIntersection = (entry) => {
    if (entry.isIntersecting && isScrollingDown) {
      // Add the class only when scrolling down
      entry.target.classList.add(styles['visible-line']);
    }
  };

  // Use the custom IntersectionObserver hook for both lines
  useIntersectionObserver(
    [lineTopRef, lineBottomRef],
    { threshold: 0.1 }, // Trigger when 10% of the element is visible
    handleIntersection
  );

  return (
    <div className={styles.stepsContainer}>
      <h2 ref={subtitleRef} className={styles.subtitle}>
        Sign up now
      </h2>
      <h1 ref={titleRef} className={styles.title}>
        Sign up in 6 simple steps
      </h1>

      {/* Middle lines */}
      <div ref={lineTopRef} className={styles['middle-line-top']}></div>
      <div ref={lineBottomRef} className={styles['middle-line-bottom']}></div>

      <div className={styles.steps}>
        {stepsData.map((step, index) => (
          <div
            ref={(el) => (stepsRefs.current[index] = el)}
            key={index}
          >
            <StepCard
              image={step.image}
              imgAlt={step.imgAlt}
              title={step.title}
              description={step.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
