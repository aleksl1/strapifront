import { useRouter } from "next/router";
import { GetServerSideProps } from "next/types";
import { FunctionComponent, useState } from "react";
import AmentCard from "../../components/HomePageComponents/AmentCard";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import { PostsWithPagination } from "../../models/Other.models";
import { PostType } from "../../models/Post.model";
import { PaginationType } from "../../models/Other.models";
import styles from "./AnnouncementsPage.module.css";

interface AnnouncementsPageProps {
  posts: PostType[];
  pagination: PaginationType;
}

const pages = 15;

const AnnouncementsPage: FunctionComponent<AnnouncementsPageProps> = ({
  posts,
  pagination,
}) => {
  const [query, setQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(true);
  const { pageCount: pages } = pagination;
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
      {isLoaded ? (
        <div className={styles.results}>
          <Pagination max={pages} />
          {posts?.map((post: PostType) => {
            return (
              <AmentCard
                key={post.id}
                id={post.id}
                attributes={post.attributes}
              />
            );
          })}

          <Pagination max={pages} />
        </div>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default AnnouncementsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.query.strona ? context.query.strona : 1;
  const data: PostsWithPagination | void = await fetch(
    `http://localhost:1337/api/posts?pagination[page]=${page}&pagination[pageSize]=10&sort=publishedAt:desc`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return { posts: data.data, pagination: data.meta.pagination };
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      posts: data?.posts,
      pagination: data?.pagination,
    }, // will be passed to the page component as props
  };
};
