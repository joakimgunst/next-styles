import type { AppProps } from "next/app";
import Head from "next/head";

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
