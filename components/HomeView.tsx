import Button from "./Button";
import Head from "next/head";

export default function HomeView() {
  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }

  return (
    <section className="container">
      <Head>
        <title>styled-jsx</title>
      </Head>
      <h1 className="text">Sustainable digital engineering</h1>
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

        .text {
          font-family: var(--font-display);
          color: var(--color-accent);
          font-size: var(--font-size-3xl);
          text-align: center;
          margin: 0;
          animation: 10s infinite pulse;
          transition: all 0.2s ease;
          user-select: none;
        }

        @media (min-width: 1024px) {
          .text {
            font-size: var(--font-size-6xl);
          }
        }

        .buttons {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
