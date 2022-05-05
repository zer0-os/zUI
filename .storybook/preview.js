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
  backgrounds: {
    default: 'zero-dark',
    values: [
      {
        name: 'zero-dark',
        value: '#0a0a0a',
      },
    ],
  },
};
