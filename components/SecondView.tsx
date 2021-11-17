import Head from "next/head";
import * as styles from "./SecondView.css";

export default function SecondView() {
  return (
    <section className={styles.container}>
      <Head>
        <title>vanilla-extract</title>
      </Head>
      <h1>Second page</h1>
    </section>
  );
}
