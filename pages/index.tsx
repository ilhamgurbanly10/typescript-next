import type { GetStaticProps, NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import { Home } from '../interfaces/PageProps'
import { Post, PostsPerCategory } from '../interfaces/Post'
import { getLastPosts, getPostsPerCategory } from '../utils/getPosts'
import CardList from '../components/card-lists/CardList'
import SliderCardList from '../components/card-lists/SliderCardList'
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageHead from '../components/heads/PageHead';
import React, {useEffect} from "react";

const Home: NextPage<Home> = ({ lastPosts, postsPerCategory }) => {

  const { t } = useTranslation();

  useEffect(() => {
  }, [])

  return (
    <>

      <PageHead
        title={`${process.env.NEXT_PUBLIC_PROJECT_NAME} - Ana Səhifə`}
        metaTitle="My Meta title"
        description="My Description"
      />

      <div className={styles.container}>

        <CardList 
          data={lastPosts} 
          title={"SON ELANLAR"} 
          link="/more-ads" 
          className="mt-10 lg:mt-20" 
        />

        {postsPerCategory?.map((post, i) => (
          <SliderCardList 
            key={i}
            data={post?.data} 
            title={post?.title} 
            link="/more-ads" 
            className="mt-10 lg:mt-20" 
          />
        ))}
        
          
      </div>

    </>
  )

}

export const getStaticProps: GetStaticProps<Home> = async ({ locale }) => {

  let lastPosts: Post[] = [];
  let postsPerCategory: PostsPerCategory[] = [];
   
  lastPosts = await getLastPosts();
  postsPerCategory = await getPostsPerCategory();

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
      lastPosts,
      postsPerCategory
    },
    revalidate: 3600,
  };
};

export default Home;


