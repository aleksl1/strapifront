import { useRouter } from "next/router";
import { FunctionComponent, useState } from "react";
import AmentCard from "../../components/HomePageComponents/AmentCard";
import Pagination from "../../components/Pagination";
import styles from "./AnnouncementsPage.module.css";

interface AnnouncementsPageProps {}

const pages = 15;

const AnnouncementsPage: FunctionComponent<AnnouncementsPageProps> = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const inputChangeHandler = (e: any) => {
    setQuery(e.target.value);
  };
  const searchHandler = () => {
    if (query) {
      router.push({ pathname: router.pathname, query: { szukaj: query } });
    }
  };
  return (
    <main className="container">
      <div className={styles["search-wrapper"]}>
        <input type="search" onChange={inputChangeHandler} />
        <button className={`button-24 ${styles.btn}`} onClick={searchHandler}>
          Wyszukaj
        </button>
      </div>
      <div className={styles.results}>
        <Pagination max={pages} />
        <AmentCard />
        <AmentCard />
        <AmentCard />
        <AmentCard />
        <AmentCard />
        <AmentCard />
        <AmentCard />
        <AmentCard />
        <AmentCard />
        <AmentCard />
        <Pagination max={pages} />
      </div>
    </main>
  );
};

export default AnnouncementsPage;
