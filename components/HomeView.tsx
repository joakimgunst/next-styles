import { darkMode } from "../styles/theme.css";
import Button from "./Button";
import { buttons, container, link } from "./HomeView.css";
import Heading from "./Heading";
import Link from "next/link";

export default function HomeView() {
  function toggleDarkMode() {
    document.body.classList.toggle(darkMode);
  }

  return (
    <section className={container}>
      <Heading />
      <div className={buttons}>
        <Button variant="primary" onClick={toggleDarkMode}>
          Toggle dark mode
        </Button>
        <Button variant="secondary">Do nothing</Button>
      </div>
      <Link href="/second">
        <a className={link}>Second page</a>
      </Link>
    </section>
  );
}
