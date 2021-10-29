import React from "react";
import Button from "./Button";

export default function HomeView() {
  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }

  return (
    <section className="h-screen flex items-center justify-center flex-col gap-10 dark:bg-rockBlack">
      <h1 className="text-3xl select-none text-neonBlue lg:text-6xl dark:text-malibuBlue">
        Sustainable digital engineering
      </h1>
      <div className="flex items-center gap-4">
        <Button variant="primary" onClick={toggleDarkMode}>
          Toggle dark mode
        </Button>
        <Button variant="secondary">Do nothing</Button>
      </div>
    </section>
  );
}
