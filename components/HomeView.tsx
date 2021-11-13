import React from "react";
import { darkTheme, keyframes, styled } from "../stitches.config";
import Button from "./Button";
import Head from "next/head";

export default function HomeView() {
  function toggleDarkMode() {
    document.body.classList.toggle(darkTheme);
  }

  return (
    <Section>
      <Head>
        <title>Stitches</title>
      </Head>
      <Heading>Sustainable digital engineering</Heading>
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

const pulse = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.1)" },
  "100%": { transform: "scale(1)" },
});

const Heading = styled("h1", {
  fontFamily: "$display",
  color: "$accent",
  fontSize: "$3xl",
  textAlign: "center",
  margin: 0,
  animation: `10s infinite ${pulse}`,
  transition: "all .2s ease",
  userSelect: "none",
  "@desktop": {
    fontSize: "$6xl",
  },
});

const Buttons = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",
});
