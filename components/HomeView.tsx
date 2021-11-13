import React from "react";
import Button from "./Button";
import Head from "next/head";

export default function HomeView() {
  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }

  return (
    <section className="h-screen flex items-center justify-center flex-col gap-10 dark:bg-rockBlack">
      <Head>
        <title>Tailwind</title>
      </Head>
      <h1 className="text-lg select-none text-neonBlue lg:text-xl dark:text-malibuBlue font-display animate-size-pulse">
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
