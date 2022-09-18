import { FunctionComponent } from "react";

import styles from "./AmentCard.module.css";
import { useRouter } from "next/router";
import { BsChevronCompactRight } from "react-icons/bs";
import { PostAttributes } from "../../models/Post.model";
import { parseDate } from "../../utils/helpers";
interface AmentCardProps {
  id: number;
  attributes: PostAttributes;
}

const AmentCard: FunctionComponent<AmentCardProps> = ({ id, attributes }) => {
  const { publishedAt, title, description } = attributes;
  const date = parseDate(publishedAt);
  const tileDescription = description.slice(0, 200).trim();
  const router = useRouter();
  return (
    <div
      className={styles.card}
      onClick={() => router.push(`/obwieszczenia/${id}`)}
    >
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.subtitle}>
          <p>
            {tileDescription}
            ...
            {/* <span>czytaj więcej</span> */}
          </p>
        </div>
        <div className={styles.footer}>
          <span className={styles.date}>Dodane: {date}</span>
          <span className={styles.creator}>
            przez <span>Kancelaria</span>
          </span>
        </div>
      </div>

      <div className={styles.end}>
        <BsChevronCompactRight size={"3rem"} />
      </div>
    </div>
  );
};

export default AmentCard;
