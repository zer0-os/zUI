import type {ReactNode} from "react";
import type {LABEL_ALIGNMENT} from "./Label.constants";

export type LabelProps = {
  label?: ReactNode;
  children?: ReactNode;
  isFullWidth?: boolean;
  isBold?: boolean;
  isContrast?: boolean;
  className?: string;
  labelAlignment?: LABEL_ALIGNMENT;
};