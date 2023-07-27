import React from "react";
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Head from "next/head";

const Layout: React.FC<any> = ({ children }) => {
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content={process.env.NEXT_PUBLIC_THEME_COLOR} />
      </Head>

      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}

export default Layout;