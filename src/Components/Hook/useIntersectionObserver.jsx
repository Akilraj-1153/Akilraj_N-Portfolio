import { useEffect } from 'react';

const useIntersectionObserver = (setActiveLink) => {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.getAttribute('name'));
        }
      });
    }, options);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [setActiveLink]);
};

export default useIntersectionObserver;
