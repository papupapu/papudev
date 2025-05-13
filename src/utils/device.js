function isPortrait(angle) {
  if (angle) {
    return angle === 0;
  }
  return window.innerHeight > window.innerWidth;
}

function getIOSVersion(ua) {  
  try {
    const completeVersion = ua.match(/OS [\d_]+/i)[0].substr(3).split('_').map(n => parseInt(n, 10));
    const [version] = completeVersion;
    return version < 13;    
  } catch (error) {
    console.log('Failed to assert IOS version from user agent information.');
  }
  return false;
}

function getIsIpadOS(ua) {
  let isIpadOs = false;
  try {
    if (ua.match(/Mac/) && !ua.match(/iPhone/) && document.createEvent('TouchEvent')) {
      isIpadOs = true;
    }
  } catch {
    isIpadOs = false;
  }
  return isIpadOs;
}

export {
  getIOSVersion,
  getIsIpadOS,
  isPortrait,
};