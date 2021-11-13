import { darkMode } from "../styles/theme.css";
import Button from "./Button";
import { buttons, container, text } from "./HomeView.css";
import Head from "next/head";

export default function HomeView() {
  function toggleDarkMode() {
    document.body.classList.toggle(darkMode);
  }

  return (
    <section className={container}>
      <Head>
        <title>vanilla-extract</title>
      </Head>
      <h1 className={text}>Sustainable digital engineering</h1>
      <div className={buttons}>
        <Button variant="primary" onClick={toggleDarkMode}>
          Toggle dark mode
        </Button>
        <Button variant="secondary">Do nothing</Button>
      </div>
    </section>
  );
}
