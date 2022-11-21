export type IconProps = {
  className?: string;
  /**
   * The accessible label for the icon. This label will be visually hidden but announced to screen
   * reader users, similar to `alt` text for `img` tags.
   */
  label?: string;
  color?: string;
  size?: string | number;
  width?: string | number;
  height?: string | number;
  isFilled?: boolean;
};
