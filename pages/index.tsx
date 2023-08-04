import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import { Home } from '../interfaces/PageProps'
import { Post, PostsPerCategory } from '../interfaces/Post'
import { getLastPosts, getPostsPerCategory, getVipPosts } from '../utils/getPosts'
import CardList from '../components/card-lists/CardList'
import SliderCardList from '../components/card-lists/SliderCardList'
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageHead from '../components/heads/PageHead';
import React from "react";

const Home: NextPage<Home> = ({ lastPosts, postsPerCategory, vipPosts }) => {

  const { t } = useTranslation();

  return (
    <>

      <PageHead
        title={`${process.env.NEXT_PUBLIC_PROJECT_NAME} - Ana Səhifə`}
        metaTitle="My Meta title"
        description="My Description"
      />

      <div className={styles.container}>

        <SliderCardList
          data={vipPosts}
          title={"VIP ELANLAR"}
          link={`/${process.env.NEXT_PUBLIC_ALL_VIP_PAGE}/`}
          className="mt-10 lg:mt-20"
          loading={false}
        />

        <CardList
          data={lastPosts}
          title={"SON ELANLAR"}
          link={`/${process.env.NEXT_PUBLIC_ALL_ADS_PAGE}`}
          className="mt-10 lg:mt-20"
          loading={false}
        />

        <CardList
          data={lastPosts}
          title={"PREMIUM ELANLAR"}
          link={`/${process.env.NEXT_PUBLIC_ALL_PREMIUM_PAGE}`}
          className="mt-10 lg:mt-20"
          loading={false}
        />

        {postsPerCategory?.map((post, i) => (
          <SliderCardList
            key={i}
            data={post?.data}
            title={post?.title}
            link={`/${process.env.NEXT_PUBLIC_FILTER_PAGE}/${post?.slug}`}
            className="mt-10 lg:mt-20"
            loading={false}
          />
        ))}

      </div>

    </>
  )

}

export const getServerSideProps: GetServerSideProps<Home> = async (context: GetServerSidePropsContext) => {

  let lastPosts: Post[] = [];
  let vipPosts: Post[] = [];
  let postsPerCategory: PostsPerCategory[] = [];

  lastPosts = await getLastPosts();
  vipPosts = await getVipPosts();
  postsPerCategory = await getPostsPerCategory();

  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ['common'])),
      lastPosts,
      postsPerCategory,
      vipPosts
    },
  };
};

export default Home;


