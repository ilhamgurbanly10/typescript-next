import type { GetStaticProps, NextPage } from 'next'
import styles from '../styles/404.module.scss'
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageHead from '../components/heads/PageHead';

const Page404: NextPage = () => {

  const { t } = useTranslation();

  return (
    <>

      <PageHead 
        title={`${process.env.NEXT_PUBLIC_PROJECT_NAME} - 404 Xəta`}
        metaTitle="My Meta title"
        description="My Description"
      /> 

      <div className={styles.container}>

        <h1>404 Page</h1>

      </div>

    </>
  )

}

export const getStaticProps: GetStaticProps = async ({ locale }) => {

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
    revalidate: 3600,
  };

};

export default Page404;


