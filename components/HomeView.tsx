import React from "react";
import { darkTheme, styled } from "../stitches.config";
import Button from "./Button";
import Heading from "./Heading";
import Link from "next/link";

export default function HomeView() {
  function toggleDarkMode() {
    document.body.classList.toggle(darkTheme);
  }

  return (
    <Section>
      <Heading />
      <Buttons>
        <Button variant="primary" onClick={toggleDarkMode}>
          Toggle dark mode
        </Button>
        <Button variant="secondary">Do nothing</Button>
      </Buttons>
      <Link href="/second" passHref>
        <StyledLink>Second page</StyledLink>
      </Link>
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
  gap: 40,
});

const Buttons = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 16,
});

const StyledLink = styled("a", {
  color: "$text",
  "&:hover": {
    textDecoration: "underline",
  },
});
