import React, { FC } from 'react';
import './InfoTooltip.scss';
import { Tooltip, TooltipProps } from '../Tooltip';
import { IconQuestionMark } from '../Icons';

export type InfoTooltipProps = TooltipProps;

export const InfoTooltip: FC<InfoTooltipProps> = ({ content }) => (
  <div className="zui-info-tooltip">
    <Tooltip content={content}>
      <div className="zui-info-tooltip-tile">
        <div className="zui-info-tooltip-tile-center">
          <IconQuestionMark />
        </div>
      </div>
    </Tooltip>
  </div>
);
