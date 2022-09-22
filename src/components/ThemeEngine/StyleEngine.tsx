import { CSS_PREFIX } from '../constants';
import { kebabCase } from 'lodash';
import React, { ReactNode, useMemo } from 'react';

import { Root as PortalRoot } from '@radix-ui/react-portal';

/**
 * Validates a CSS color variable.
 * @param value The value to validate
 */
const isColor = (value: string) => {
  const s = new Option().style;
  s.background = value;
  return s.background !== '';
};

/**
 * Adds children to document.head via Radix Portal.
 * @param children The children to add to document.head
 */
const HeadPortal = ({ children }: { children: ReactNode }) => {
  return (
    <PortalRoot asChild={true} container={document.head}>
      {children}
    </PortalRoot>
  );
};

type Styles = {
  [key: string]: string;
};

/**
 * Converts an object of key/value pairs into a CSS string.
 * Values are validated to ensure they are valid CSS color variables.
 * Variable names are formated to kebab-case and have --zui appended.
 * @param styles
 */
const mapStylesToCSS = (styles: Styles): string => {
  return Object.entries(styles)
    .map(([style, value]) => {
      // Theme values are currently all colors - check they are valid
      // colors before adding them to the output styles
      if (isColor(value)) {
        return `--${CSS_PREFIX}-${kebabCase(style)}: ${value};`;
      } else {
        console.warn('CSS variable not supported', style, value);
        return;
      }
    })
    .join(' ')
    .toString()
    .trim();
};

export interface StyleEngineProps {
  styles?: Styles;
}

/**
 * Adds an array of CSS key value pairs to a <style> tag in <head>.
 * Also appends converts CSS keys to the format --zui-<key-as-kebab-case>
 * @param styles
 * @constructor
 */
export const StyleEngine = ({ styles }: StyleEngineProps) => {
  const mappedStyles = useMemo(() => {
    return styles ? mapStylesToCSS(styles) : '';
  }, [styles]);

  return (
    <HeadPortal>
      <style id={'zui-theme-variables'} type={'text/css'}>{`:root { ${mappedStyles} }`}</style>
    </HeadPortal>
  );
};
