import React from "react";

import { ZeroUIProvider } from "../src/providers/ZeroUIProvider";

export const decorators = [
  (Story) => (
    <ZeroUIProvider>
      <Story />
    </ZeroUIProvider>
  ),
];

export const parameters = {
  controls: { expanded: true },
};
