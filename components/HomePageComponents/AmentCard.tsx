import { FunctionComponent } from "react";
import Image from "next/image";
import styles from "./AmentCard.module.css";
import { useRouter } from "next/router";
import { BsChevronCompactRight } from "react-icons/bs";
interface AmentCardProps {}

const AmentCard: FunctionComponent<AmentCardProps> = () => {
  const router = useRouter();
  return (
    <div className={styles.card} onClick={() => router.push("/")}>
      {/* <div className={styles.thumbnail}>
        <Image src="" alt="" />
      </div> */}
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>Lorem ipsum dolor sit amet.</h2>
        </div>
        <div className={styles.subtitle}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id
            ratione exercitationem dolor sit, a eum unde rem dolores debitis.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            quod quas dolores pariatur praesentium maiores similique voluptatum,
            odio sit, temporibus repellat eveniet porro, necessitatibus sapiente
            rem! Aperiam fugiat magnam cupiditate reprehenderit delectus nulla
            necessitatibus earum et, fugit dolore voluptas! Exercitationem
            iusto, aspernatur quasi reiciendis minima sit libero dolor iure
            accusantium!
          </p>
        </div>
        <div className={styles.footer}>
          <span className={styles.date}>Dodane: 20.12.2022 o 15.55</span>
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
