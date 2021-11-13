import React from "react";
import { darkTheme, styled } from "../stitches.config";
import Button from "./Button";
import Head from "next/head";
import Heading from "./Heading";

export default function HomeView() {
  function toggleDarkMode() {
    document.body.classList.toggle(darkTheme);
  }

  return (
    <Section>
      <Head>
        <title>Stitches</title>
      </Head>
      <Heading />
      <Buttons>
        <Button variant="primary" onClick={toggleDarkMode}>
          Toggle dark mode
        </Button>
        <Button variant="secondary">Do nothing</Button>
      </Buttons>
    </Section>
  );
}

const Section = styled("section", {
  background: "$background",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "$10",
});

const Buttons = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",
});
