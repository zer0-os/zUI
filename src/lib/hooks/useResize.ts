import { useResizeDetector } from 'react-resize-detector';

export const useResize: typeof useResizeDetector = props => {
  return useResizeDetector(props);
};
