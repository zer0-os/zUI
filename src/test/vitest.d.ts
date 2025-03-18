import { Vi } from 'vitest';

declare global {
  interface Window {
    vi: Vi;
  }
  var vi: Vi;
}
