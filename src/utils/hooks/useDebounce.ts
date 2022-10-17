import { useState, useEffect } from 'react';

const CONFIG = {
  defaultDelayInMilliseconds: 300
};

export const useDebounce = (value: string, delayInMilliseconds?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const delay = delayInMilliseconds || CONFIG.defaultDelayInMilliseconds;

  useEffect(() => {
    const update = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(update);
  }, [value, delay]);

  return debouncedValue;
};
