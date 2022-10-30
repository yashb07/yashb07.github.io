import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Yash Belsare - Developer Portfolio</title>
        <meta
          name="description"
          content="A developer portfolio website of Yash Belsare for showcasing skills, experience and projects built and developed by me"
        />

        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="developer, developer portfolio, portfolio, web development, nextjs"
        />
        <meta name="author" content="Yash Belsare" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:url" content="https://yashbelsare.vercel.app/" />
        <meta
          property="og:title"
          content="Yash Belsare - Developer Portfolio"
        />
        <meta
          property="og:description"
          content="A developer portfolio website of Yash Belsare for showcasing skills, experience and projects built and developed by me"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
