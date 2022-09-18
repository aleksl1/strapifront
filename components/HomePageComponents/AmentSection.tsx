import { FunctionComponent } from "react";
import styles from "./AmentSection.module.css";
import AmentCard from "./AmentCard";
import { useRouter } from "next/router";
import { PostType } from "../../models/Post.model";

interface AmentSectionProps {
  posts: PostType[];
}

const AmentSection: FunctionComponent<AmentSectionProps> = ({ posts }) => {
  const router = useRouter();

  return (
    <section className="container">
      <div className={styles["header-container"]}>
        <h1>Obwieszczenia</h1>
        <span>Ostatnio dodane</span>
      </div>
      {posts.map((post: PostType) => {
        return (
          <AmentCard key={post.id} id={post.id} attributes={post.attributes} />
        );
      })}
      <div className={styles["btn-container"]}>
        <div className={styles.btnwrap}>
          <button
            className="button-24"
            role="button"
            onClick={() => router.push("/obwieszczenia")}
          >
            Zobacz wszystkie
          </button>
        </div>
      </div>
    </section>
  );
};

export default AmentSection;
