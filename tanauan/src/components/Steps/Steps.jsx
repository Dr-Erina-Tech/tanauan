import React, { useEffect, useRef, useState } from 'react';
import styles from './Steps.module.css';
import { animateElement, animateTitleAndSubtitle } from '../../animations/scrollPopAnimations';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const StepCard = ({ image, imgAlt, title, description }) => (
  <div className={styles.step}>
    <img src={image} alt={imgAlt} className={styles['step-image']} />
    <h3 className={styles['step-title']}>{title}</h3>
    <p className={styles['step-description']}>{description}</p>
  </div>
);

const Steps = ({ steps }) => {  // Make sure we are receiving 'steps' as a prop
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const stepsRefs = useRef([]);
  const lineTopRef = useRef(null);
  const lineBottomRef = useRef(null);

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
    animateTitleAndSubtitle(titleRef, subtitleRef);

    stepsRefs.current.forEach((step, index) => {
      const image = step.querySelector(`.${styles['step-image']}`);
      const title = step.querySelector(`.${styles['step-title']}`);
      const description = step.querySelector(`.${styles['step-description']}`);

      animateElement(image, { trigger: step, delay: 0 });
      animateElement(title, { trigger: step, delay: 0.2 });
      animateElement(description, { trigger: step, delay: 0.4 });
    });
  }, []);

  const handleIntersection = (entry) => {
    if (entry.isIntersecting && isScrollingDown) {
      entry.target.classList.add(styles['visible-line']);
    }
  };

  useIntersectionObserver(
    [lineTopRef, lineBottomRef],
    { threshold: 0.1 },
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
        {/* Map over the 'steps' prop passed from HomeSteps */}
        {steps.map((step, index) => (
          <div ref={(el) => (stepsRefs.current[index] = el)} key={index}>
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
