import { FunctionComponent } from "react";
import styles from "./Logo.module.css";
interface LogoProps {}

const Logo: FunctionComponent<LogoProps> = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>LOGO</h1>
      <strong className={styles.subheader}>Company Name</strong>
    </div>
  );
};

export default Logo;
