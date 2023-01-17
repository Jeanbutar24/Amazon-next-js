import { Header, ProductFeed } from '../../components';
import Head from 'next/head';
import BannerProducts from '../../components/Banner/BannerProducts';
const Product = ({ product, category }) => {
  return (
    <div className='bg-[#eaeded] min-h-screen'>
      <div>
        <Header />
      </div>
      <Head>
        <title>Our Products</title>
      </Head>
      <div className=' grid grid-cols-12 grid-rows-2 mt-[20px] h-[383px] mx-[40px] gap-6 '>
        <div className='col-span-6 bg-white p-3 row-span-2  rounded-[14px]'>
          <BannerProducts />
        </div>
        <div className='col-span-3 bg-white rounded-[12px] row-span-1 p-2'>
          <img src='https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg' alt='' className='w-full h-full object-contain' />
        </div>
        <div className='col-span-3 bg-white rounded-[12px] row-span-1 p-2'>
          <img src='https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg' alt='' className='w-full h-full object-contain' />
        </div>
        <div className='col-span-3 bg-white rounded-[12px] row-span-1 p-2'>
          <img src='https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg' alt='' className='w-full h-full object-contain' />
        </div>
        <div className='col-span-3 bg-white rounded-[12px] row-span-1 p-2'>
          <img src='https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg' alt='' className='w-full h-full object-contain' />
        </div>
      </div>
      <div className='mx-[40px]'>
        <p className='text-[#232f3e] text-[30px] mt-3 ml-4 font-semibold'>Product</p>
        <ProductFeed product={product} />
      </div>
    </div>
  );
};

export default Product;
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
