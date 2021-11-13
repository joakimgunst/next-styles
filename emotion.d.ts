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
      md: string;
      lg: string;
      xl: string;
    };
  }
}
