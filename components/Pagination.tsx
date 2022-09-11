import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";
import styles from "./Pagination.module.css";

interface PaginationProps {
  max: number;
}

const Pagination: FunctionComponent<PaginationProps> = ({ max }) => {
  const router = useRouter();
  const [activePage, setActivePage] = useState(1);
  const [pages, setPages] = useState<number[]>();

  useEffect(() => {
    if (!router.query.strona) {
      setActivePage(1);
    } else if (
      Number(router.query.strona) < 1 ||
      Number(router.query.strona) > max
    ) {
      setActivePage(1);
    } else {
      setActivePage(Number(router.query.strona));
    }
  }, [router.query.strona, max]);

  useEffect(() => {
    if (activePage >= max - 2 && activePage <= max) {
      setPages([1, max - 3, max - 2, max - 1, max]);
    } else if (activePage < 3 && activePage > 0) {
      setPages([1, 2, 3, 4, max]);
    } else {
      const tempPages = [1, activePage - 1, activePage, activePage + 1, max];
      setPages(tempPages);
    }
  }, [activePage, max]);

  const changePageHandler = (pageNumber: number) => {
    let page = pageNumber;
    if (page < 1) page = 1;
    if (page > 15) page = 15;
    router.push({
      pathname: router.pathname,
      query: { strona: page },
    });
  };

  return (
    <div className={styles.pagination}>
      {pages?.map((page: number) => {
        const isActive = activePage === page;
        return (
          <span
            key={page}
            onClick={() => changePageHandler(page)}
            className={isActive ? styles.activePage : ""}
            tabIndex={0}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
