import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { darkTheme, theme } from "../styles/theme";
import React from "react";
import { useDarkMode } from "../state/darkMode";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode] = useDarkMode();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
