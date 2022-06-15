export const shuffle = (arr) => arr.sort(() => Math.random() - 0.5).slice();

export const debounce = (fn, wait = 1) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.call(this, ...args), wait);
  };
};

export const sleep = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};
