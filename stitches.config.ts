import { createStitches, globalCss } from "@stitches/react";

export const { getCssText } = createStitches();

export const globalStyles = globalCss({
  body: { margin: 0 },
  h1: { margin: 0 },
  "@font-face": [
    {
      fontFamily: "Reckless Neue",
      fontWeight: "bold",
      src: 'url("/fonts/RecklessNeue-Bold.woff2")',
    },
    {
      fontFamily: "Roobert",
      src: 'url("/fonts/Roobert-Regular.woff2")',
    },
  ],
});
