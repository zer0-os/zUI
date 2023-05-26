import { ReactNode } from 'react';
import { ToggleGroupMultipleProps, ToggleGroupSingleProps } from '@radix-ui/react-toggle-group';

/*
 * Toggles & Options
 */

interface ImplToggle {
  key: string;
  isDisabled?: boolean;
}

export interface LabelToggle extends ImplToggle {
  label: string;
}

export interface IconToggle extends ImplToggle {
  icon: ReactNode;
}

export type ToggleOptions = LabelToggle[] | IconToggle[];
export type ToggleOption = LabelToggle | IconToggle;

/**
 * Component props
 */

interface ImplRequiredProps<T> {
  isRequired: true;
  selection: T;
}

interface ImplOptionalProps<T> {
  isRequired?: false;
  selection?: T;
}

interface ImplToggleGroupProps {
  className?: string;
  isDisabled?: boolean;
  options: ToggleOptions;
  /**
   * @deprecated There is no more minimal variant
   */
  variant: 'minimal' | 'default';
}

export interface ImplSingleSelectProps extends ImplToggleGroupProps {
  selectionType: ToggleGroupSingleProps['type'];
  onSelectionChange: (selection: string) => void;
  selection: string;
}

export interface ImplMultipleSelectProps extends ImplToggleGroupProps {
  selectionType: ToggleGroupMultipleProps['type'];
  onSelectionChange: (selection: string[]) => void;
  selection: string[];
}

export type SingleRequiredToggleGroupProps = ImplRequiredProps<ImplSingleSelectProps['selection']> &
  ImplSingleSelectProps;
export type SingleOptionalToggleGroupProps = ImplOptionalProps<ImplSingleSelectProps['selection']> &
  ImplSingleSelectProps;
export type MultipleRequiredToggleGroupProps = ImplRequiredProps<ImplMultipleSelectProps['selection']> &
  ImplMultipleSelectProps;
export type MultipleOptionalToggleGroupProps = ImplOptionalProps<ImplMultipleSelectProps['selection']> &
  ImplMultipleSelectProps;

export type ToggleGroupProps =
  | SingleRequiredToggleGroupProps
  | SingleOptionalToggleGroupProps
  | MultipleRequiredToggleGroupProps
  | MultipleOptionalToggleGroupProps;
