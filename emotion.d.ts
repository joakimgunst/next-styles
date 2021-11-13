import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    fonts: {
      display: string;
      ui: string;
    };
    colors: {
      background: string;
      text: string;
      accent: string;
    };
    fontSizes: {
      xl: string;
      "3xl": string;
      "6xl": string;
    };
  }
}
