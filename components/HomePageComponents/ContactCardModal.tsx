import { FunctionComponent } from "react";
import styles from "./ContactSection.module.css";
import { IoIosCloseCircle } from "react-icons/io";
interface ContactCardModalProps {
  showModal: (show: boolean) => void;
}

const ContactCardModal: FunctionComponent<ContactCardModalProps> = ({
  showModal,
}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.close} onClick={() => showModal(false)}>
        <IoIosCloseCircle size={"3rem"} />
      </div>
      <div className={styles["contact-card"]}>
        <span>INLEX Kancelaria Prawnicza</span>
        <span>Jerzy Sławek</span>
        <span>Adres do korespondencji:</span>
        <span> ul. Pogodna 36 lok. 11</span>
        <span> 20-337 Lublin</span>
        <span>Konto bankowe: PKO BP SA Centrum Inteligo</span>
        <span>50 1020 5558 1111 1044 4340 0014</span>
      </div>
    </div>
  );
};

export default ContactCardModal;
