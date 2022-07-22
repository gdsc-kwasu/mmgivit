import React from "react";
import Head from "next/head";
import HomeContainer from "@containers/Home";
import PageLayout from "@layout/PageLayout";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title> MMGIVIT Initiative</title>
        <meta
          name="description"
          content="MMGIVIT is dedicated to the entrenchment of the culture of charity as a means of uplifting the less privileged by redistributing wealth, engaging in charity and charitable acts and promoting ideas of giving. sharing and kindness in the society irrespective of religious, ethnic and/or political considerations."
        />
        {/* Google's meta */}
        <meta itemProp="name" content="MMGIVIT CYVC KWASU" />
        <meta
          itemProp="description"
          content="dedicated to the entrenchment of the culture of charity as a means of uplifting the less privileged by redistributing wealth, engaging in charity and charitable acts and promoting ideas of giving. sharing and kindness in the society irrespective of religious, ethnic and/or political considerations."
        />
        <meta itemProp="image" content="#" />
        {/* Facebook's meta */}
        <meta property="og:url" content="https://mmgivit.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MMGIVIT CYVC KWASU" />
        <meta
          property="og:description"
          content="dedicated to the entrenchment of the culture of charity as a means of uplifting the less privileged by redistributing wealth, engaging in charity and charitable acts and promoting ideas of giving. sharing and kindness in the society irrespective of religious, ethnic and/or political considerations."
        />
        <meta property="og:image" content="#" />
        {/* Twitter's meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MMGIVIT CYVC KWASU" />
        <meta
          name="twitter:description"
          content="dedicated to the entrenchment of the culture of charity as a means of uplifting the less privileged by redistributing wealth, engaging in charity and charitable acts and promoting ideas of giving. sharing and kindness in the society irrespective of religious, ethnic and/or political considerations."
        />
        <meta name="twitter:site" content="mmgivit.netlify.app" />
        <meta name="twitter:image" content="#" />
      </Head>
      <HomeContainer />
    </React.Fragment>
  );
}

Home.getLayout = (page) => <PageLayout>{page}</PageLayout>;
