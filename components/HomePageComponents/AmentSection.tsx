import { FunctionComponent } from "react";
import styles from "./AmentSection.module.css";
import AmentCard from "./AmentCard";
import { useRouter } from "next/router";

interface AmentSectionProps {}

const AmentSection: FunctionComponent<AmentSectionProps> = () => {
  const router = useRouter();

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
          <button
            className="button-24"
            role="button"
            onClick={() => router.push("/obwieszczenia")}
          >
            Zobacz wszystkie
          </button>
        </div>
      </div>
    </section>
  );
};

export default AmentSection;
