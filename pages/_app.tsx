import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import React from "react";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
