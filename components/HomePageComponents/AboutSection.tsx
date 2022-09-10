import { FunctionComponent } from "react";
import styles from "./AboutSection.module.css";
interface AboutSectionProps {}

const AboutSection: FunctionComponent<AboutSectionProps> = () => {
  return (
    <div className="container">
      <section className={styles.about}>
        <h1>Kancelaria Prawnicza INLEX Jerzy Sławek</h1>
        <div className={`line ${styles.line}`}></div>
        <h4>
          Kancelaria Prawnicza INLEX jest firmą prawniczą opartą na
          doświadczeniach prawnika, menedżera Jerzego Sławka.
        </h4>
        <p>
          W ramach własnej kancelarii Jerzy Sławek wykonuje czynności doradcy
          restrukturyzacyjnego min. dla Sądu Rejonowego Wydział Gospodarczy dla
          miasta Stołecznego Warszawa i Sądu Rejonowego Wydział Gospodarczy w
          Lublinie. Czynności te są wykonywane na podstawie licencji syndyka,
          którą jako pierwszą w kraju udzielił Jerzemu Sławkowi Minister
          Sprawiedliwości RP
        </p>
        <div className={styles.btncontainer}>
          <button className="button-24" role="button">
            Więcej o kancelarii
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
