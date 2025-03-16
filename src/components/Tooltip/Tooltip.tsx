import type { FC, PropsWithChildren } from 'react';

import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { CSS_PREFIX } from '../constants';
import './Tooltip.scss';

export const BASE_CLASSNAME = `${CSS_PREFIX}-tooltip`;

export interface TooltipProps {
  content: string;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
}

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  open,
  defaultOpen,
  onOpenChange,
  side = 'top',
  align = 'center',
  content,
  children
}) => {
  return (
    <TooltipPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} delayDuration={100}>
      <TooltipPrimitive.Trigger asChild className={`${BASE_CLASSNAME}__trigger`}>
        <span tabIndex={0}>{children}</span>
      </TooltipPrimitive.Trigger>

      <TooltipPrimitive.Content side={side} align={align} className={`${BASE_CLASSNAME}__content`}>
        {content}
        <TooltipPrimitive.Arrow className={`${BASE_CLASSNAME}__arrow`} width={32} height={16} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
};
