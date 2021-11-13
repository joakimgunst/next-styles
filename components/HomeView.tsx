import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "./Button";
import Head from "next/head";

export default function HomeView() {
  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }

  return (
    <Container>
      <Head>
        <title>Emotion</title>
      </Head>
      <Text>Sustainable digital engineering</Text>
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

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Text = styled.h1`
  font-family: ${(props) => props.theme.fonts.display};
  color: ${(props) => props.theme.colors.accent};
  font-size: ${(props) => props.theme.fontSizes["3xl"]};
  text-align: center;
  margin: 0;
  animation: 10s infinite ${pulse};
  transition: all 0.2s ease;
  user-select: none;

  @media (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontSizes["6xl"]};
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
