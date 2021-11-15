import Button from "./Button";
import styles from "./HomeView.module.css";
import Head from "next/head";
import Heading from "./Heading";

export default function HomeView() {
  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }

  return (
    <section className={styles.container}>
      <Head>
        <title>CSS Modules</title>
      </Head>
      <Heading />
      <div className={styles.buttons}>
        <Button variant="primary" onClick={toggleDarkMode}>
          Toggle dark mode
        </Button>
        <Button variant="secondary">Do nothing</Button>
      </div>
    </section>
  );
}
