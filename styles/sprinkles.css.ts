import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { vars } from "./theme.css";

const space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
};

const properties = defineProperties({
  properties: {
    color: vars.color,
    background: vars.color,
    fontSize: vars.fontSize,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

export const sprinkles = createSprinkles(properties);
