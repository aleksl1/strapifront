import { FunctionComponent } from "react";
import styles from "./AmentSection.module.css";
import AmentCard from "./AmentCard";
interface AmentSectionProps {}

const AmentSection: FunctionComponent<AmentSectionProps> = () => {
  return (
    <section className="container">
      <div className={styles["header-container"]}>
        <h1>Obwieszczenia</h1>
        <span>Ostatnio dodane</span>
      </div>

      <AmentCard />
      <AmentCard />
      <AmentCard />
      <div className={styles["header-container"]}>
        <div className={styles.btnwrap}>
          <button className="button-24" role="button">
            Zobacz wszystkie
          </button>
        </div>
      </div>
    </section>
  );
};

export default AmentSection;
