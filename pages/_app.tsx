import type { AppProps } from "next/app";
import Head from "next/head";
import { globalStyles } from "../stitches.config";

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
