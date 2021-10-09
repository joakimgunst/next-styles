import { darkMode } from "../styles/theme.css";
import Button from "./Button";
import { buttons, container, text } from "./HomeView.css";

export default function HomeView() {
  function toggleDarkMode() {
    document.body.classList.toggle(darkMode);
  }

  return (
    <section className={container}>
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
