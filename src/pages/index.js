import Head from 'next/head';
import { Banner, Header, ProductCard } from '../components';

export default function Home({ product }) {
  return (
    <div className='bg-[#eaeded]'>
      <Head>
        <title>Amazon</title>
      </Head>
      iu
      <div className='sticky top-0 z-50'>
        <Header />
      </div>
      <main className='max-w-screen-2xl mx-auto'>
        <Banner />
        <div>
          <p className='text-gray-700 text-[30px] mt-3 ml-4 font-semibold'>Product</p>
          <div className='flex flex-wrap justify-evenly '>
            {product.map((data, i) => (
              <ProductCard data={data} key={i} />
            ))}
          </div>
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
