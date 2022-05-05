import React, { FC } from "react";

import { BaseProvider } from "baseui";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";

import { customDarkTheme } from "./themes";

const engine = new Styletron();

export const ZeroUIProvider: FC = ({ children }) => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={customDarkTheme}>{children}</BaseProvider>
    </StyletronProvider>
  );
};
