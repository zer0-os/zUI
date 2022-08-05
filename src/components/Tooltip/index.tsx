import type { FC, ReactNode } from 'react';

import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import classnames from 'classnames';
import { CSS_PREFIX } from '../constants';
import './Tooltip.scss';

export const BASE_CLASSNAME = `${CSS_PREFIX}-tooltip`;

export type TooltipProps = {
  open?: TooltipPrimitive.TooltipProps['open'];
  defaultOpen?: TooltipPrimitive.TooltipProps['defaultOpen'];
  onOpenChange?: TooltipPrimitive.TooltipProps['onOpenChange'];
  side: TooltipPrimitive.TooltipContentProps['side'];
  align: TooltipPrimitive.TooltipContentProps['align'];
  content?: ReactNode;
  rootProps?: Partial<Omit<TooltipPrimitive.TooltipProps, 'open' | 'defaultOpen' | 'onOpenChange'>>;
  triggerProps?: Partial<Omit<TooltipPrimitive.TooltipTriggerProps, 'asChild'>>;
  contentProps?: Partial<Omit<TooltipPrimitive.TooltipContentProps, 'side' | 'align'>>;
  arrowProps?: Partial<TooltipPrimitive.TooltipArrowProps>;
  classNames?: {
    triggerClass?: string;
    contentClass?: string;
    arrowClass?: string;
  };
};

export const Tooltip: FC<TooltipProps> = ({
  open,
  defaultOpen,
  onOpenChange,
  side = 'top',
  align = 'center',
  content,
  rootProps,
  triggerProps,
  contentProps,
  arrowProps,
  classNames,
  children
}) => {
  const { delayDuration = 100, ...restRootProps } = rootProps || {};
  const { width = 32, height = 16, ...restArrowProps } = arrowProps || {};

  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      delayDuration={delayDuration}
      {...restRootProps}
    >
      <TooltipPrimitive.Trigger
        asChild
        className={classnames(`${BASE_CLASSNAME}__trigger`, classNames?.triggerClass)}
        {...triggerProps}
      >
        <span tabIndex={0}>{children}</span>
      </TooltipPrimitive.Trigger>

      <TooltipPrimitive.Content
        side={side}
        align={align}
        className={classnames(`${BASE_CLASSNAME}__content`, classNames?.contentClass)}
        {...contentProps}
      >
        {content}
        <TooltipPrimitive.Arrow
          className={classnames(`${BASE_CLASSNAME}__arrow`, classNames?.arrowClass)}
          width={width}
          height={height}
          {...restArrowProps}
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
};
