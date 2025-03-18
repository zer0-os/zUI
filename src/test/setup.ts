import '@testing-library/jest-dom';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect with Testing Library matchers
expect.extend(matchers);

// Make vi available globally
globalThis.vi = vi;

// Cleanup after each test
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
