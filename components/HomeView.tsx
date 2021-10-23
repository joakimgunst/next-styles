import React from "react";
import { keyframes, styled, theme } from "../stitches.config";
import Button from "./Button";

export default function HomeView() {
  return (
    <Section>
      <Heading>Sustainable digital engineering</Heading>
      <Buttons>
        <Button variant="primary">Toggle dark mode</Button>
        <Button variant="secondary">Do nothing</Button>
      </Buttons>
    </Section>
  );
}

const Section = styled("section", {
  background: theme.colors.background,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 40,
});

const pulse = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.1)" },
  "100%": { transform: "scale(1)" },
});

const Heading = styled("h1", {
  fontFamily: theme.fonts.text,
  color: theme.colors.accent,
  fontSize: "2rem",
  textAlign: "center",
  margin: 0,
  animation: `10s infinite ${pulse}`,
  transition: "all .2s ease",
  userSelect: "none",
  "@desktop": {
    fontSize: "4rem",
  },
});

const Buttons = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 16,
});
