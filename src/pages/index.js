import React from "react";
import RootLayout from "../../components/layout/RootLayout";
import Head from "next/head";
import Image from "next/image";
import NextImage from "../assets/images/nextjs-icon-2048x1234-pqycciiu.png";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Nextjs home page</title>
        <meta name="home page" description="This page created by next js" />
      </Head>
      <h1>This nextjs home page</h1>
      <Image
        src="https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png"
        width={500}
        height={500}
        alt="Picture of the author"
        layout="responsive"
      ></Image>

      <Image
        src={NextImage}
        width={500}
        height={500}
        alt="Picture of the author"
        layout="responsive"
      ></Image>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
