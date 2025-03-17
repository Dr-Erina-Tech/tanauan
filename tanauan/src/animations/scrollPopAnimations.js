import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Reusable animation function for any element
export const animateElement = (element, options = {}) => {
  const { trigger, start = 'top 80%', end = 'top 30%', duration = 0.5, delay = 0, y = 50, opacity = 0 } = options;

  gsap.fromTo(
    element,
    { y, opacity },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      scrollTrigger: {
        trigger: trigger || element,
        start,
        end,
        toggleActions: 'play none none reverse',
      },
    }
  );
};

//specific function for titles and subtitles
export const animateTitleAndSubtitle = (titleRef, subtitleRef) => {
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
};
