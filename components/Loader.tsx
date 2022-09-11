import { FunctionComponent } from "react";
import styles from "./Loader.module.css";
interface LoaderProps {}

const Loader: FunctionComponent<LoaderProps> = () => {
  return (
    <div className={styles.loader}>
      <div className={styles["lds-default"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
