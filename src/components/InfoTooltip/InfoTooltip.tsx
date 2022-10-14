import React, { FC } from 'react';
import './InfoTooltip.scss';
import { Tooltip } from '../Tooltip';
import { IconHelpCircle } from '../Icons';

export type InfoTooltipProps = {
  content: string;
};

export const InfoTooltip: FC<InfoTooltipProps> = ({ content }) => (
  <div className="zui-info-tooltip">
    <Tooltip content={content}>
      <div className="zui-info-tooltip-tile">
        <div className="zui-info-tooltip-tile-center">
          <IconHelpCircle size={'1rem'} />
        </div>
      </div>
    </Tooltip>
  </div>
);
