import Head from 'next/head';
import { Banner, Header, ProductCard, ProductFeed } from '../components';

export default function Home({ product }) {
  return (
    <div className='bg-[#eaeded]'>
      <Head>
        <title>Amazon</title>
      </Head>
      <div className='sticky top-0 z-50'>
        <Header />
      </div>
      <main className='max-w-screen-2xl mx-auto'>
        <Banner />
        <div className='md:-mt-52'>
          <ProductFeed product={product} />
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
