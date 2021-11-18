import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/reset.css";
import "../styles/fonts.css";
import "../styles/theme.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>styled-jsx</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
