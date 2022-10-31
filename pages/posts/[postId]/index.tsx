import { GetStaticPaths, GetStaticProps } from "next";
import { FunctionComponent } from "react";
import { PostType } from "../../../models/Post.model";
import { parseDate } from "../../../utils/helpers";
import styles from "./Announcement.module.css";
interface AnnouncementProps {
  post: PostType;
}

const Announcement: FunctionComponent<AnnouncementProps> = ({ post }) => {
  const { attributes } = post;
  const { title, description, publishedAt, media } = attributes;
  const date = parseDate(publishedAt);
  return (
    <article className={styles.article}>
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>
      <div className={styles.created}>
        <span>Obwieszczenie dodane {date} przez Kancelaria</span>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Announcement;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetch("http://localhost:1337/api/posts")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.data;
    })
    .catch((err) => console.log(err));
  const postsIdsParams = posts.map((post: PostType) => {
    return { params: { id: post.id.toString() } };
  });
  return {
    paths: [...postsIdsParams],
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const post = await fetch(
    `http://localhost:1337/api/posts/${context.params?.id}?populate=media`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.data;
    })
    .catch((err) => console.log(err));
  return {
    props: {
      post: post,
    }, // will be passed to the page component as props
  };
};
