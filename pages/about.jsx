import React from "react";
import Head from "next/head";
import PageLayout from "@layout/PageLayout";

export default function About() {
  return (
    <React.Fragment>
      <Head>
        <title>MMGIVIT | About</title>
      </Head>
    </React.Fragment>
  );
}

About.getLayout = (page) => <PageLayout>{page}</PageLayout>;
