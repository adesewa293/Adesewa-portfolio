
"use client"
import { useEffect, useState } from 'react';

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed right-4 bottom-4 bg-amber-400 text-white rounded-full p-2 cursor-pointer hover:bg-amber-600 transition-all`}
      onClick={scrollToTop}
    >
      ↑
    </div>
  );
};

export default ScrollToTopArrow;