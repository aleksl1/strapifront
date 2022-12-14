import type { GetServerSideProps } from "next";
import Head from "next/head";
import AboutSection from "../components/HomePageComponents/AboutSection";
import AmentSection from "../components/HomePageComponents/AmentSection";
import ContactSection from "../components/HomePageComponents/ContactSection";
import OfferSection from "../components/HomePageComponents/OfferSection";
import Loader from "../components/Loader";
import { PostType } from "../models/Post.model";
import styles from "../styles/Home.module.css";
interface HomeProps {
  posts: PostType[];
}

const Home = ({ posts }: HomeProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {posts ? <AmentSection posts={posts} /> : <Loader />}
        <div className={styles.line} />
        <AboutSection />
        <div className={styles.line} />
        <OfferSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await fetch(
    "http://localhost:1337/api/posts?pagination[pageSize]=5&sort=publishedAt:desc"
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
      posts: posts,
    }, // will be passed to the page component as props
  };
};
