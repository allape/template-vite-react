import { ThemeProvider } from "@allape/gocrud-react";
import { ReactElement } from "react";
import styles from "./style.module.scss";

export default function App(): ReactElement {
  return (
    <ThemeProvider>
      <div className={styles.wrapper}>Hello world!</div>
    </ThemeProvider>
  );
}
