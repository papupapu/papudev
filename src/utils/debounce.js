function debounce(fn, tm = 0) {
  let timeout;

  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => fn(...args), tm);
  };
}

export default debounce;