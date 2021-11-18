import Button from "./Button";
import Heading from "./Heading";

export default function HomeView() {
  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }

  return (
    <section className="container">
      <Heading />
      <div className="buttons">
        <Button variant="primary" onClick={toggleDarkMode}>
          Toggle dark mode
        </Button>
        <Button variant="secondary">Do nothing</Button>
      </div>

      <style jsx>{`
        .container {
          background: var(--color-background);
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 40px;
        }

        .buttons {
          display: flex;
          align-items: center;
          gap: 16px;
        }
      `}</style>
    </section>
  );
}
