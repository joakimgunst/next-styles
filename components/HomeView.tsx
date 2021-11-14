import styled from "@emotion/styled";
import Button from "./Button";
import Head from "next/head";
import Heading from "./Heading";
import { useDarkMode } from "../state/darkMode";

export default function HomeView() {
  const [_, setDarkMode] = useDarkMode();

  function toggleDarkMode() {
    setDarkMode((value) => !value);
  }

  return (
    <Container>
      <Head>
        <title>Emotion</title>
      </Head>
      <Heading />
      <Buttons>
        <Button variant="primary" onClick={toggleDarkMode}>
          Toggle dark mode
        </Button>
        <Button variant="secondary">Do nothing</Button>
      </Buttons>
    </Container>
  );
}

const Container = styled.section`
  background: ${(props) => props.theme.colors.background};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
