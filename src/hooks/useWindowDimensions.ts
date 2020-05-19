import { useState, useEffect } from 'react';

type Hook = {
  width: number;
  height: number;
};

function getWindowDimensions(): Hook {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions(): Hook {
  const [windowDimensions, setWindowDimensions] = useState<Hook>(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
