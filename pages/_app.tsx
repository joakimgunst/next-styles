import type { AppProps } from "next/app";
import Head from "next/head";
import { globalStyles } from "../stitches.config";
import "../styles/reset.css";
import "../styles/fonts.css";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <Head>
        <title>Stitches</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
