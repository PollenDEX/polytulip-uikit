import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#4EA7CF",
  primaryBright: "#4EA7CF",
  primaryDark: "#FFFFFF",
  secondary: "#703f97",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#000000",
  textDisabled: "#BDC2C4",
  textSubtle: "#2b2b2b",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#3be658",
  background: "#5ae0fd",
  backgroundDisabled: "#46b6ce",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#583b92",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};