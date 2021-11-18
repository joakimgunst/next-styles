import { styled, theme } from "../stitches.config";

export default function SecondView() {
  return (
    <Container>
      <h1>Second page</h1>
    </Container>
  );
}

export const Container = styled("section", {
  background: theme.colors.accent,
  color: theme.colors.background,
  fontSize: theme.fontSizes.lg,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
