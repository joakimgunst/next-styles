import Button from "./Button";
import { buttons, container, text } from "./HomeView.css";

export default function HomeView() {
  return (
    <section className={container}>
      <h1 className={text}>Sustainable digital engineering</h1>
      <div className={buttons}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </section>
  );
}
