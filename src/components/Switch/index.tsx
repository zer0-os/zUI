import React, { FC } from 'react';
import * as SwitchRadix from '@radix-ui/react-switch';

type SwitchProps = {
  id?: string;
  className?: string;
  defaultChecked?: boolean;
};

const Switch: FC<SwitchProps> = ({ id, className, ...rest }) => {
  return (
    <SwitchRadix.Root id={id} className={className} {...rest}>
      <SwitchRadix.Thumb />
    </SwitchRadix.Root>
  );
};

export default Switch;
