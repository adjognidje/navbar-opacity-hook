// index.js
import { useState, useEffect } from 'react';

const useNavbarOpacity = ({
  maxOpacity = 1,
  minOpacity = 0,
  increaseOpacityOnScrollUp = false,
} = {}) => {
  const [opacity, setOpacity] = useState(minOpacity);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;

      const scrollPercentage = currentScrollY / scrollableHeight;

      const newOpacity = increaseOpacityOnScrollUp
        ? (1 - scrollPercentage) * (maxOpacity - minOpacity) + minOpacity
        : scrollPercentage * (maxOpacity - minOpacity) + minOpacity;

      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [maxOpacity, minOpacity, increaseOpacityOnScrollUp]);

  return opacity;
};

export default useNavbarOpacity;
