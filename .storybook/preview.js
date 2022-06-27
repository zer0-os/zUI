import React from "react";

import ZUIProvider from "../src/ZUIProvider";

export const decorators = [
  (Story) => (
    <ZUIProvider>
      <Story />
    </ZUIProvider>
  ),
];

export const parameters = {
  controls: { expanded: true },
};
