import React, { FC } from "react";

import { InputProps, Input as BaseInput } from "baseui/input";

interface IInput extends InputProps {
  // add any additional props here
}

const HEIGHT = 48;

const Input: FC<IInput> = () => {
  return (
    <BaseInput
      overrides={{
        Root: {
          style: () => ({
            height: `${HEIGHT}px`,
          }),
        },
      }}
    />
  );
};

export default Input;
