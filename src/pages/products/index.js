import { Header, ProductFeed } from '../../components';
import Head from 'next/head';
import BannerProducts from '../../components/Banner/BannerProducts';
import Select from 'react-select';
const Product = ({ product, category }) => {
  const options = [
    { value: '1', label: 'Price' },
    { value: '2', label: 'Quality' },
    { value: '3', label: 'Popular' },
  ];
  const price = [
    { value: '1', label: '$ 5.03 - $ 20.66' },
    { value: '2', label: '$ 20.03 - $ 60.66' },
    { value: '3', label: '$ 100.03 >' },
  ];
  return (
    <div className='bg-[#eaeded] min-h-screen'>
      <div>
        <Header />
      </div>
      <Head>
        <title>Our Products</title>
      </Head>
      <div className='hidden md:grid grid-cols-12 grid-rows-2 mt-[20px] h-[383px] mx-[40px] gap-6 '>
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
      <div className='flex space-x-8'>
        <div className='hidden md:inline'>
          <div className='ml-3 rounded-[12px] max-h-max mt-5 bg-white p-3 min-w-[300px]'>
            <div className='flex justify-between items-center'>
              <p className='text-[24px] font-semibold'>Filter</p>
              <p className='text-[22px] font-extrabold text-gray-600'>:</p>
            </div>
            <div className='mt-6'>
              <p className='text-[15px] font-semibold mb-1'>Supliers Type :</p>
              <div className='flex items-center space-x-3'>
                <input type='checkbox' name='' id='' />
                <p className='text-gray-600'>Trade Asurance</p>
              </div>
              <div className='flex items-center space-x-3'>
                <input type='checkbox' name='' id='' />
                <p className='text-gray-600'>Verified Asurance</p>
              </div>
            </div>
            <div className='mt-4'>
              <p className='text-[15px] font-semibold mb-1'>Products Type :</p>
              <div className='flex items-center space-x-3'>
                <input type='checkbox' name='' id='' />
                <p className='text-gray-600'>Ready To ship</p>
              </div>
              <div className='flex items-center space-x-3'>
                <input type='checkbox' name='' id='' />
                <p className='text-gray-600'>Paid Samples</p>
              </div>
            </div>
            <div className='mt-4'>
              <p className='text-[15px] font-semibold mb-1'>Condition :</p>
              <div className='flex items-center space-x-3'>
                <input type='checkbox' name='' id='' />
                <p className='text-gray-600'>New Stuff</p>
              </div>
              <div className='flex items-center space-x-3'>
                <input type='checkbox' name='' id='' />
                <p className='text-gray-600'>Second Hand</p>
              </div>
            </div>
            <div className='mt-4'>
              <p className='text-[15px] font-semibold mb-1'>Category :</p>
              <div className='flex items-center space-x-3'>
                <input type='checkbox' name='' id='' />
                <p className='text-gray-600'>Men's Clothing</p>
              </div>
              <div className='flex items-center space-x-3'>
                <input type='checkbox' name='' id='' />
                <p className='text-gray-600'>Women's Clothing</p>
              </div>
              <div className='flex items-center space-x-3'>
                <input type='checkbox' name='' id='' />
                <p className='text-gray-600'>Jawelery</p>
              </div>
              <div className='flex items-center space-x-3'>
                <input type='checkbox' name='' id='' />
                <p className='text-gray-600'>Electronics</p>
              </div>
            </div>
            <div className='mt-4'>
              <p className='text-[15px] font-semibold mb-1'>Min Order :</p>
              <div className='flex items-center space-x-3'>
                <div>
                  <input type='range' className='range' name='' id='' />
                  <div className='flex justify-between -mt-3'>
                    <p className='text-[14px] text-gray-500'>10</p>
                    <p className='text-[14px] text-gray-500'>100</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <p className='text-[15px] font-semibold mb-1'>Price :</p>
              <div className='flex items-center space-x-3'>
                <Select options={price} className='z-50  md:w-[200px]' />
              </div>
            </div>
            <button className='bg-yellow-400 p-2 rounded-[10px] font-medium border-gray-600 mt-6 border-[1px]'>Search Now</button>
          </div>
        </div>
        <div className='mx-[40px]'>
          <div className='ml-3 rounded-[12px] max-h-max mt-5 bg-white p-3 min-w-[300px] flex justify-between mr-4'>
            <div className='flex items-center space-x-3'>
              <p className='font-semibold'>Sort By</p>
              <Select options={options} className='z-50  md:w-[200px]' />
            </div>
            <div className='flex items-center space-x-3'>
              <p className='font-semibold'>Filter by</p>
              <Select options={options} className='z-50  md:w-[200px]' />
            </div>
          </div>
          <div>
            <p className='text-[#232f3e] text-[30px] mt-3 ml-4 font-semibold'>Product</p>
            <ProductFeed product={product} />
          </div>
        </div>
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
