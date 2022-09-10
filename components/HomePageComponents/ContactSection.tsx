import { FunctionComponent } from "react";
import styles from "./ContactSection.module.css";
interface ContactSectionProps {}

const ContactSection: FunctionComponent<ContactSectionProps> = () => {
  return (
    <div className={styles["contact-wrapper"]}>
      <section className={styles.contact}>
        <h3>Skontaktuj się z nami</h3>
        <div className={styles["contact-list-container"]}>
          <ul>
            <li>
              <span>Napisz email</span>
              <span>jerzy.slawek@inlex.pl</span>
            </li>
            <li>
              <span>Zadzwoń</span>
              <span>+48 81 479 45 53 lub +48 221010225</span>
            </li>
          </ul>
        </div>
        <div className={styles["contact-card"]}>
          <span>INLEX KANCELARIA PRAWNICZA JERZY SŁAWEK</span>
          <span> ul. Pogodna 36 lok. 11</span>
          <span> 20-337 Lublin</span>
          <span>Konto bankowe: PKO BP SA Centrum Inteligo</span>
          <span>50 1020 5558 1111 1044 4340 0014</span>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
