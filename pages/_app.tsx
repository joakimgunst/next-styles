import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/reset.css";
import "../styles/fonts.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>vanilla-extract</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
