import React, { ReactElement } from 'react';
import classnames from 'classnames';
import './color-swatch.scss';

export interface ColorSwatchProps {
  title: string;
  variable: string;
  color: string;
  className?: string;
}

export const ColorSwatch = ({ title, variable, color, className }: ColorSwatchProps): ReactElement => {
  return (
    <div className={classnames('color_swatch', className)}>
      <div className="color_swatch__details">
        <p className="color_swatch__details-title">{title}</p>
        <p className="color_swatch__details-variable">{variable}</p>
      </div>
      <div className="color_swatch__color">
        <div className="color_swatch__color_info">
          <div className="color_swatch__color_info-box" style={{ backgroundColor: color }}></div>
          <p className="color_swatch__color_info-hex">{color}</p>
        </div>
      </div>
    </div>
  );
};

ColorSwatch.defaultProps = {
  title: undefined,
  variable: undefined,
  color: undefined,
  className: undefined
};
