import React from "react";
import Head from "next/head";
import HomeContainer from "@containers/Home";
import PageLayout from "@layout/PageLayout";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>MMGIVIT</title>
      </Head>
      <HomeContainer />
    </React.Fragment>
  );
}

Home.getLayout = (page) => <PageLayout>{page}</PageLayout>;
