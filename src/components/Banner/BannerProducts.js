import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const BannerProducts = () => {
  return (
    <div className='relative bg-white flex'>
      <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} interval={5000} width={'40%'}>
        <div>
          <img src='https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg' alt='' />
        </div>
        <div>
          <img src='https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg' alt='' />
        </div>
        <div>
          <img src='https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg' alt='' />
        </div>
      </Carousel>
      <div className='absolute top-[30%] right-5'>
        <p className='text-[24px]'>
          Search <span className='text-[30px] bg-yellow-400 p-2 rounded-[10px]'>your</span> favorite
        </p>
        <p className='text-[24px]'>
          <span className='underline'>product</span> and buy it <span className='text-[30px] bg-yellow-400 p-2 rounded-[10px]'>Now</span>
        </p>
      </div>
    </div>
  );
};

export default BannerProducts;
