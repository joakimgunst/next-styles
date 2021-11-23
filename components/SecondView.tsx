import { sprinkles } from "../styles/sprinkles.css";
import * as styles from "./SecondView.css";

export default function SecondView() {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Second page</h1>
      <div
        className={sprinkles({
          background: "background",
          color: "accent",
          fontSize: "md",
          paddingY: 2,
          paddingX: 3,
        })}
      >
        This box is styled with Sprinkles
      </div>
    </section>
  );
}
