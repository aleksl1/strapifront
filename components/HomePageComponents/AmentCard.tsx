import { FunctionComponent } from "react";
import styles from "./AmentCard.module.css";
interface AmentCardProps {}

const AmentCard: FunctionComponent<AmentCardProps> = () => {
  return <div className={styles.card}></div>;
};

export default AmentCard;
