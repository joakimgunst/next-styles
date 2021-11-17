import { darkMode } from "../styles/theme.css";
import Button from "./Button";
import { buttons, container } from "./HomeView.css";
import Head from "next/head";
import Heading from "./Heading";
import Link from "next/link";

export default function HomeView() {
  function toggleDarkMode() {
    document.body.classList.toggle(darkMode);
  }

  return (
    <section className={container}>
      <Head>
        <title>vanilla-extract</title>
      </Head>
      <Heading />
      <div className={buttons}>
        <Button variant="primary" onClick={toggleDarkMode}>
          Toggle dark mode
        </Button>
        <Button variant="secondary">Do nothing</Button>
      </div>
      <Link href="/second">
        <a>Second page</a>
      </Link>
    </section>
  );
}
