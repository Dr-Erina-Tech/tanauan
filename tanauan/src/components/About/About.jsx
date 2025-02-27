
import React, { useRef, useEffect } from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';
import { aboutData } from './aboutData';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element.querySelector(`.${styles.textContainer}`),
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'top 30%',
          toggleActions: 'play none none reset',
        },
      }
    );

    gsap.fromTo(
      element.querySelector(`.${styles.logoImageContainer}`),
      { rotateY: 0 },
      {
        rotateY: 360,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'top 30%',
          toggleActions: 'play none none reset',
        },
      }
    );
  }, []);

  return (
    <div className={`${styles.aboutContainer} mt-5`}>
      <div ref={ref} className={`${styles.content} d-flex flex-column flex-md-row align-items-center`}>
        <div className={`${styles.textContainer} col-md-8`}>
          <h1 className={`${styles.title} fw-bold`}>{aboutData.title}</h1>
          <p className={`${styles.description1} mt-4`}>
            {aboutData.description}
            <a className="text-primary" href={aboutData.link1.url}>{aboutData.link1.text}</a>.
            {aboutData.description2}
            <a className="text-primary" href={aboutData.link2.url}>{aboutData.link2.text}</a>.
          </p>
          <p className={`${styles.description2} mt-4`}>{aboutData.conclusion}</p>
        </div>

        <div className={`${styles.logoImageContainer} col-md-4 d-flex justify-content-center`}>
          <img
            className={styles.logoTanauanImage}
            loading="lazy"
            decoding="async"
            src={getImageUrl('/about/tanauan-logo.svg')}
            alt="City Logo"
          />
        </div>
      </div>
      <div className={`${styles.backgroundImage}`}>
        <img src={aboutData.backgroundSrc} alt={aboutData.backgroundAlt} className="img-fluid w-100" />
      </div>
    </div>
  );
};

export default About;