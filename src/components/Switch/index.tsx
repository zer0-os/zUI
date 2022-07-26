import React, { FC } from 'react';

import * as SwitchRadix from '@radix-ui/react-switch';

type SwitchProps = {
  className?: string;
  defaultChecked?: boolean;
};

const Switch: FC<SwitchProps> = ({ className, ...rest }) => {
  return (
    <SwitchRadix.Root className={className} id="hello" {...rest}>
      <SwitchRadix.Thumb />
    </SwitchRadix.Root>
  );
};

export default Switch;
