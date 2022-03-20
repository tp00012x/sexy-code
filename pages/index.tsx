import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sexy code</title>
        <meta name="description" content="Sexy code" />
      </Head>
      <div className="text-9xl">This is sexy code</div>
    </>
  );
};

export default Home;
