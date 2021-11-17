import type { AppProps } from "next/app";
import Head from "next/head";
import "windi.css";
import "../styles/fonts.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>vanilla-extract</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
