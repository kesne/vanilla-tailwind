import { composeStyles, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { atoms } from "./sprinkles.css";
import { responsive, vars } from "./theme.css";

// absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
export const offsetBg = composeStyles(
  atoms({
    position: "absolute",
    inset: 0,
    boxShadow: "lg",
    borderRadius: { sm: "3xl" },
  }),
  style({
    background: `linear-gradient(to right, ${vars.colors["cyan-400"]}, ${vars.colors["sky-500"]})`,
    transform: `skewY(-6deg)`,
    "@media": {
      [`screen and (min-width: ${responsive.sm})`]: {
        transform: `skewY(0) rotate(-6deg)`,
      },
    },
  })
);
