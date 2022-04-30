import React from "react";
import Head from "next/head";
import Layout from "@layout/index";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>About page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Home Page</h1>
      </Layout>
    </React.Fragment>
  );
}
