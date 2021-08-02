import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";
import colors from "tailwindcss/colors";

globalStyle("*, :after, :before", {
  boxSizing: "border-box",
  border: "0 solid",
});

type TailwindColorStop =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

function tailwindColorMap<T extends keyof typeof colors>(
  name: T
): {
  [P in keyof typeof colors[T] as `${T}-${TailwindColorStop}`]: string;
} {
  // @ts-ignore: I promise the type is correct:
  return Object.fromEntries(
    Object.entries(colors[name]).map(([num, value]) => [
      `${name}-${num}`,
      value,
    ])
  );
}

export const responsive = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const vars = createGlobalTheme(":root", {
  shadow: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    none: "none",
  },
  space: {
    auto: "auto",
    px: "1px",
    0: "0px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  colors: {
    white: colors.white,
    black: colors.black,
    transparent: "transparent",
    ...tailwindColorMap("blue"),
    ...tailwindColorMap("cyan"),
    ...tailwindColorMap("gray"),
    ...tailwindColorMap("red"),
    ...tailwindColorMap("green"),
    ...tailwindColorMap("indigo"),
    ...tailwindColorMap("purple"),
    ...tailwindColorMap("sky"),
  },
});
