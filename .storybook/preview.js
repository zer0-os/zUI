import React from "react";
import { MemoryRouter } from "react-router-dom";
import ZUIProvider from "../src/ZUIProvider";

export const decorators = [
  Story => {
    return (
      <MemoryRouter initialEntries={['/']}>
        <ZUIProvider>
          <Story />
        </ZUIProvider>
      </MemoryRouter>
    );
  }
];

export const parameters = {
<<<<<<< HEAD
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
=======
  previewTabs: {
    canvas: {
      title: 'Story',
      hidden: false
    }
  },
  controls: {
    disable: true
  },
  actions: { argTypesRegex: '^on[A-Z].*' }
>>>>>>> 7785aae (update storybook configuration)
};
