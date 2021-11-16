import React from "react";
import Button from "./Button";
import Head from "next/head";
import Heading from "./Heading";
import tw from "twin.macro";
import { styled } from "@stitches/react";

export default function HomeView() {
  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }

  return (
    <Section>
      <Head>
        <title>Twin</title>
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

const Section = styled(
  "section",
  tw`h-screen flex items-center justify-center flex-col gap-10 dark:bg-rockBlack`
);

const Buttons = styled("div", tw`flex items-center gap-4`);
