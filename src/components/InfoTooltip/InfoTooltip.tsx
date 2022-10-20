import React, { FC } from 'react';
import type { TooltipProps } from '../Tooltip';
import './InfoTooltip.scss';
import { Tooltip } from '../Tooltip';
import { IconHelpCircle } from '../Icons';

export const InfoTooltip: FC<TooltipProps> = props => (
  <div className="zui-info-tooltip">
    <Tooltip {...props}>
      <div className="zui-info-tooltip-tile">
        <div className="zui-info-tooltip-tile-center">
          <IconHelpCircle size={'1rem'} />
        </div>
      </div>
    </Tooltip>
  </div>
);
