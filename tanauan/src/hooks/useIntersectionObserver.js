import { useEffect } from 'react';

const useIntersectionObserver = (elementsRefs, options, callback) => {
  useEffect(() => {
    if (!elementsRefs || !callback) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        callback(entry);
      });
    }, options);

    elementsRefs.forEach((ref) => {
      if (ref && ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      elementsRefs.forEach((ref) => {
        if (ref && ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [elementsRefs, options, callback]);
};

export default useIntersectionObserver;
