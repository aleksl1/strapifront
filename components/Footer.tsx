import { FunctionComponent } from "react";
import styles from "../styles/Footer.module.css";
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <span>&copy; kancelaria prawnicza inlex</span>
    </footer>
  );
};

export default Footer;
