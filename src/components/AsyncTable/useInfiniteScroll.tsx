import React, { memo, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';

import { useOnScreen } from '../../lib/hooks/useOnScreen';
import { AsyncTableProps } from './AsyncTable';

export interface InfiniteScrollProps<T> {
  items: T[];
  chunkSize: number;
  component: AsyncTableProps<T>['rowComponent'] | AsyncTableProps<T>['gridComponent'];
}

interface WrapperProps<T> {
  children: ReactNode;
  className?: string;
}

export const useInfiniteScroll = <T extends unknown>({ items, chunkSize, component }: InfiniteScrollProps<T>) => {
  const totalItems = items.length;

  const [chunk, setChunk] = useState(1);

  const chunkedComponents = useMemo(() => {
    return items.slice(0, chunkSize * chunk).map(item => component(item));
  }, [chunk, chunkSize, items, component]);

  const resetChunk = useCallback(() => setChunk(1), [setChunk]);

  const totalRendered = chunkedComponents.length;
  const hasMore = totalRendered < totalItems;

  const InfiniteScrollWrapper = useMemo(
    () =>
      ({ children, className }: WrapperProps<T>) => {
        const handleNext = () => setChunk(chunk + 1);
        return (
          <InfiniteScroll
            className={className}
            dataLength={chunkSize}
            next={handleNext}
            hasMore={hasMore}
            loader={hasMore && <Loader onVisible={handleNext} />}
          >
            {children}
          </InfiniteScroll>
        );
      },
    [chunk, chunkSize, totalItems, totalRendered]
  );

  return {
    InfiniteScrollWrapper,
    chunkedComponents,
    resetChunk
  };
};

/**
 * react-infinite-scroll-component is sometimes a little bit flaky when
 * you first load the page. This component makes sure that the user will always
 * render at least as many components as they can see on the screen.
 */
const Loader = memo(({ onVisible }: { onVisible: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      onVisible();
    }
  }, [isVisible]);

  return <div ref={ref} />;
});
