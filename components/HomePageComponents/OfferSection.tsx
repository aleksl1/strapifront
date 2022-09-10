import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import styles from "./OfferSection.module.css";
interface OfferSectionProps {}

const offers = [
  { id: "doradztwo", text: "Doradztwa" },
  { id: "restrukturyzacja", text: "Restrukturyzacji" },
  { id: "upadlosci", text: "Upadłości" },
  { id: "edukacja", text: "Edukacji" },
];

type OfferType = {
  id: string;
  text: string;
};

const OfferSection: FunctionComponent<OfferSectionProps> = () => {
  const router = useRouter();

  const redirectHandler = (offerId: string) => {
    router.push({
      pathname: "/uslugi",
      query: { rodzaj: offerId },
    });
  };

  return (
    <div className="container">
      <section className={styles.offer}>
        <h1>Oferujemy usługi w zakresie</h1>
        <div className={`line ${styles.line}`}></div>
        <div className={styles["tiles-container"]}>
          {offers.map((offer: OfferType) => {
            return (
              <div
                className={styles.tile}
                key={offer.id}
                onClick={() => redirectHandler(offer.id)}
              >
                <h3>{offer.text}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default OfferSection;
