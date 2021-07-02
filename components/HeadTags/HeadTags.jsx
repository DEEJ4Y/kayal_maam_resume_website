import Head from "next/head";

const HeadTags = () => {
  return (
    <Head>
      <title>Kayalvizhi Jayavel</title>
      <meta
        name="description"
        content="Hi, I'm Kayalvizhi Jayavel, and this is my personal website!"
      />
      <meta property="og:type" content="Resume Website" />
      <meta property="og:title" content="Kayalvizhi Jayavel" />
      <meta
        property="og:description"
        content="Hi, I'm Kayalvizhi Jayavel, and this is my personal website!"
      />
      <meta property="og:image" content="LINK TO THE IMAGE FILE" />
      <meta property="og:url" content="PERMALINK" />
      <meta property="og:site_name" content="SITE NAME" />

      <meta name="viewport" content="width=device-width,initial-scale=1.0" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadTags;
