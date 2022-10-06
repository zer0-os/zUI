import { ReactNode } from 'react';

export type AsyncTableComponent<T> = (data: T, options?: unknown) => ReactNode;
