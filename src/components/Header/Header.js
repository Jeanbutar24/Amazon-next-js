import { Icon } from '@iconify/react';
import Image from 'next/image';
const Header = () => {
  return (
    <header>
      {/* top nav */}
      <div className='flex items-center bg-amazon_blue p-1 flex-grow'>
        <div className='mt-2 flex flex-grow sm:flex-grow-0 items-center '>
          <Image src='https://links.papareact.com/f90' width={150} height={40} objectFit='contain' />
        </div>
        {/* search Item */}
        <div className='hidden cursor-pointer sm:flex sm:items-center flex-grow  bg-yellow-400 hover:bg-yellow-500 rounded-md'>
          <input className='p-2 rounded-l-md flex-grow w-6 h-full focus:outline-none' type='text' />
          <div className='p-1'>
            <Icon icon='material-symbols:search' width={25} height={25} color='#232F3E' />
          </div>
        </div>
        {/* Right */}
        <div className='text-white flex items-center space-x-6 text-xs mx-6'>
          <div className='link'>
            <p>Hello Jean Butar</p>
            <p className='font-bold md:text-sm'>Account & list</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-bold md:text-sm'>& Order</p>
          </div>
          <div className='link flex items-center relative'>
            <Icon icon='ph:shopping-cart-bold' color='white' width={30} height={30} />
            <span className='absolute bg-yellow-400 p-1 rounded-[50%] h-4 w-4  flex items-center justify-center text-black top-[-3px] right-[-5px] md:right-[42px]'>
              0
            </span>
            <p className='hidden md:inline self-end  ml-1 font-bold md:text-sm'>Basket</p>
          </div>
        </div>
      </div>
      {/* bottom nav */}
      <div className='bg-amazon_blue-light text-white text-sm p-1 md:p-2 pl-6 flex items-center space-x-6'>
        <p className='flex items-center link'>
          <Icon icon='material-symbols:menu-rounded' color='white' width={30} height={30} />
          all
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Todays Deals</p>
        <p className='link hidden lg:inline-flex'>Electonics </p>
        <p className='link hidden lg:inline-flex'>Food & Grocery</p>
        <p className='link hidden lg:inline-flex'>Price</p>
        <p className='link hidden lg:inline-flex'>Buy Again</p>
        <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care </p>
      </div>
    </header>
  );
};

export default Header;
