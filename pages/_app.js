import "@styles/globals.scss";
import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <React.Fragment>
      <Head>
        <title>MMGIVIT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </React.Fragment>
  );
}

export default MyApp;
