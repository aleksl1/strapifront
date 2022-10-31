import { FunctionComponent } from "react";
import styles from "./Footer.module.css";
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <span>&copy; some company gmbh</span>
    </footer>
  );
};

export default Footer;
