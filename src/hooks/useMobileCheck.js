import { useEffect, useState } from 'react';

export const useMobileCheck = (callback) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => {
      setIsMobile(checkIsMobile());
      // callback(checkIsMobile());
    }

    window.addEventListener('resize', onResize);
    onResize();

    return () => (
      window.removeEventListener('resize', onResize)
    );
  }, []);
  return isMobile;
}

function checkIsMobile() {
  const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if(isMobileDevice) {
    return true;
  }
  const isMobileWidth = window.innerWidth < 700;
  if(isMobileWidth) {
    return true;
  }
  return false;
}
