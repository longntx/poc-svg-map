import { useEffect } from 'react';

export const useOnElementClick = ({ selector, callback }) => {
  useEffect(() => {
    let elements;
    if (selector) {
      elements = document.querySelectorAll(selector);
    }
    if (elements) {
      elements.forEach((ele) => {
        ele.addEventListener('click', callback);
      });
    }
    return () => {
      elements.forEach((ele) => {
        ele.removeEventListener('click', callback);
      });
    };
  }, [selector, callback]);
};
