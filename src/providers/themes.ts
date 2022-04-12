import { createDarkTheme, createTheme } from "baseui";
import type { Theme } from "baseui";

interface ICustomTheme extends Theme {}

const lightTheme = createTheme({
  primaryFontFamily: "Inter",
  // primary: "#F127E4", // hot pink
  // primary50: "#FDEDFC",
  // primary100: "#FCD3F9",
  // primary200: "#F89FF3",
  // primary300: "#F45AEA",
  // primary400: "#F127E4",
  // primary500: "#B71DAD",
  // primary600: "#901788",
  // primary700: "#600F5B",
  // accent: "#F127E4",
});

const darkTheme = createDarkTheme({
  primaryFontFamily: "Inter",
});

export const customLightTheme: ICustomTheme = {
  ...lightTheme,
};

export const customDarkTheme: ICustomTheme = {
  ...darkTheme,
};
