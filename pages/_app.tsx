import '../styles/globals.css'
import '../styles/globals.scss'
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default appWithTranslation(MyApp)
