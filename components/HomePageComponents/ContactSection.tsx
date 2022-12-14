import { FunctionComponent, useState } from "react";
import styles from "./ContactSection.module.css";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsCardText } from "react-icons/bs";
import ContactCardModal from "./ContactCardModal";
interface ContactSectionProps {}

const ContactSection: FunctionComponent<ContactSectionProps> = () => {
  const [showCard, setShowCard] = useState(true);

  const toggleModal = () => {
    setShowCard(!showCard);
  };

  return (
    <div className={styles["contact-wrapper"]}>
      <section id="contact" className={styles.contact}>
        {showCard && <ContactCardModal toggleModal={toggleModal} />}
        <h3>Skontaktuj się z nami</h3>
        <div className={styles.email}>
          <MdOutlineMail size={"2.3rem"} />
          <span>jerzy.slawek@inlex.pl</span>
        </div>
        <div className={styles.phone}>
          <FaPhoneSquareAlt size={"2rem"} />
          <div>
            <span>+48 81 479 45 53</span>
            <span>+48 221 010 225</span>
          </div>
        </div>
        <div className={styles.card} onClick={() => toggleModal()}>
          <BsCardText size={"3rem"} />
          <div>
            <p>Wizytówka</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
