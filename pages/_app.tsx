import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { darkTheme, theme } from "../styles/theme";
import React from "react";
import { useDarkMode } from "../state/darkMode";
import Head from "next/head";
import "../styles/reset.css";
import "../styles/fonts.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode] = useDarkMode();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Head>
        <title>Emotion</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
