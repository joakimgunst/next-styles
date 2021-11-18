import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import Link from "next/link";

export default function HomeView() {
  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }

  return (
    <section className="h-screen flex items-center justify-center flex-col gap-10 dark:bg-rockBlack">
      <Heading />
      <div className="flex items-center gap-4">
        <Button variant="primary" onClick={toggleDarkMode}>
          Toggle dark mode
        </Button>
        <Button variant="secondary">Do nothing</Button>
      </div>
      <Link href="/second">
        <a className="font-ui text-rockBlack dark:text-pureWhite hover:underline">
          Second page
        </a>
      </Link>
    </section>
  );
}
