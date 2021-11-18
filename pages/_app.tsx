import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import "../styles/reset.css";
import "../styles/fonts.css";
import "../styles/theme.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Linaria</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
