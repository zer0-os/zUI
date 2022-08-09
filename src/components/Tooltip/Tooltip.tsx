import type { FC, ReactNode } from 'react';

import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { CSS_PREFIX } from '../constants';
import './Tooltip.scss';

export const BASE_CLASSNAME = `${CSS_PREFIX}-tooltip`;

export type TooltipProps = {
  open?: TooltipPrimitive.TooltipProps['open'];
  defaultOpen?: TooltipPrimitive.TooltipProps['defaultOpen'];
  onOpenChange?: TooltipPrimitive.TooltipProps['onOpenChange'];
  side?: TooltipPrimitive.TooltipContentProps['side'];
  align?: TooltipPrimitive.TooltipContentProps['align'];
  content?: ReactNode;
};

export const Tooltip: FC<TooltipProps> = ({
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
