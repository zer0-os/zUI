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
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "dark",
        value: "#0a0a0a",
      },
    ],
  },
  controls: { expanded: true },
};
