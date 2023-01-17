import Head from 'next/head';
import { Banner, Header, ProductFeed } from '../components';
import Widget from '../components/Widget/Widget';

export default function Home({ product, category }) {
  // console.log(category?.electronics);
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
        <div className='md:-mt-44  flex space-x-6'>
          <Widget image={'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'} title={"Men's Clothing"} />
          <Widget image={'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'} title={'Jewelery'} />
          <Widget image={'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg'} title={'Electronics'} />
          <Widget image={'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'} title={"Women's Clothing"} />
        </div>
        <div>
          <p className='text-[#232f3e] text-[30px] mt-3 ml-4 font-semibold'>Product</p>
          <ProductFeed product={product} />
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  const category = data.reduce((a, c) => {
    const group = c['category'];
    if (!a[group]) {
      a[group] = [];
    }
    a[group].push(c);
    return a;
  }, {});
  return {
    props: {
      product: data,
      category: category,
    },
  };
};
