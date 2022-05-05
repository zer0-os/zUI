import { createDarkTheme, createTheme } from "baseui";
import type { Theme } from "baseui";

interface ICustomTheme extends Theme {
  background: string;
}

const extraColors = {
  accentblue100: "#52CBFF",
  accentblue200: "#52AEFF",
  accentblue300: "#5291FF",
  accentblue400: "#5274FF",
  gradientazure25: "linear-gradient(90deg, rgba(82, 87, 255, 0.25) 0%, rgba(82, 203, 255, 0.25) 100%)",
  gradientazure50: "linear-gradient(90deg, rgba(82, 87, 255, 0.50) 0%, rgba(82, 203, 255, 0.50) 100%)",
  gradientazure100: "linear-gradient(90deg, rgba(82, 87, 255, 1) 0%, rgba(82, 203, 255, 1) 100%)",
};

/**
 * Variables which are shared between
 * light and dark theme
 */
const PRIMITIVES = {
  primaryFontFamily: "Inter",
  accent: "#F127E4",
  accent50: "#6A3991",
  accent100: "#472E5B",
  accent200: "#381C4E",
  accent300: "#23142F",
  accent400: "#1A1022",
  accent500: "#120D16",
  positive: "#58C573",
  warning: "#E2DC4F",
};

const INPUT_OVERRIDES = {
  colors: {
    inputFill: "linear-gradient(90deg, rgba(82, 174, 255, 0.1) 0%, rgba(82, 203, 255, 0.1) 100%)",
    inputFillActive: "linear-gradient(90deg, rgba(82, 174, 255, 0.1) 0%, rgba(82, 203, 255, 0.1) 100%)",
    inputBorder: extraColors.accentblue100,
  },
  borders: {
    inputBorderRadius: "24px",
  },
  sizes: {},
};

const OVERRIDES = {
  ...INPUT_OVERRIDES,
};

const lightTheme = createTheme(PRIMITIVES, OVERRIDES);

export const darkTheme = createDarkTheme(PRIMITIVES, OVERRIDES);

export const customLightTheme: ICustomTheme = {
  ...lightTheme,
  ...extraColors,
  background: "#fff",
};

export const customDarkTheme: ICustomTheme = {
  ...darkTheme,
  ...extraColors,
  background: "#0A0A0A",
};
