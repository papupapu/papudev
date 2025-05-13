'use client';

import { useState, useEffect, createContext, useContext } from 'react';

import debounce from '@/utils/debounce';
import * as utils from '@/utils/device';

export const DeviceContext = createContext();

export const useCtxDevice = () => useContext(DeviceContext);

export const DeviceStateProvider = ({ children }) => {
  const [deviceInfos, setDeviceInfos] = useState({
    device: null,
    viewport: {
      width: null,
      height: null,
    },
    touchscreen: null,
    mobileOs: null,
    orientation: null,
  });
  
  useEffect(() => {
    const getDeviceInfos = () => {
      const ua = navigator.userAgent;
      const touchscreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
      const orientation = typeof screen?.orientation?.angle !== 'undefined' ? screen?.orientation?.angle : null;
      const isIpadOs = utils.getIsIpadOS(ua);

      const isTablet = ua.match(/ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|KFAPWI/i) || isIpadOs;
      const isSafari = ua.indexOf('Safari/') > -1 && ua.indexOf('Chrome/') < 0;

      let mobileOs = null;
      if (ua.match(/iPhone|iPad|iPod/i) || isIpadOs) {
        mobileOs = 'ios';
      } else if (ua.match(/Android/i)) {
        mobileOs = 'android';
      } else if (ua.match(/Windows Phone/i)) {
        mobileOs = 'windowsphone';
      }

      let device;
      let isShortDesktop = false;

      const viewport = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      };

      if (mobileOs) {
        device = isTablet ? 'tablet' : 'smartphone';
      } else {
        device = 'desktop';
        if (viewport.height < 651) {
          isShortDesktop = true;
        }
      }

      const iosLth12 = mobileOs === 'ios'
        ? utils.getIOSVersion(ua)
        : false;

      setDeviceInfos({
        device,
        viewport,
        touchscreen,
        mobileOs,
        orientation: utils.isPortrait(orientation) ? 'portait' : 'landscape',
        isShortDesktop,
        isSafari,
        isIpadOs,
        iosLth12,
      });
    };

    const debouncedGetDeviceInfos = debounce(getDeviceInfos, 250);

    getDeviceInfos();

    window.addEventListener('resize', debouncedGetDeviceInfos);
    return () => window.removeEventListener('resize', debouncedGetDeviceInfos);
  }, []);


  return (
    <DeviceContext.Provider value={deviceInfos}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceContext;
