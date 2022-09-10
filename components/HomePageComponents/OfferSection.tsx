import { FunctionComponent } from "react";
import styles from "./OfferSection.module.css";
interface OfferSectionProps {}

const OfferSection: FunctionComponent<OfferSectionProps> = () => {
  return (
    <div className="container">
      <section className={styles.offer}>
        <h1>Oferujemy usługi w zakresie</h1>
        <div className={`line ${styles.line}`}></div>
        <div className={styles["tiles-container"]}>
          <div className={styles.tile}>
            <h3>Doradztwa</h3>
          </div>
          <div className={styles.tile}>
            <h3>Edukacji</h3>
          </div>
          <div className={styles.tile}>
            <h3>Restrukturyzacji</h3>
          </div>
          <div className={styles.tile}>
            <h3>Upadłości</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfferSection;
