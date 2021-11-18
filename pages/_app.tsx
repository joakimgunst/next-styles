import type { AppProps } from "next/app";
import React from "react";
import "../styles/reset.css";
import "../styles/fonts.css";
import "../styles/theme.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
