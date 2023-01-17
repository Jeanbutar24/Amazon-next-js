import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Widget from '../Widget/Widget';
const Banner = () => {
  return (
    <div className='relative'>
      <div className='absolute bg-gradient-to-t from-gray-300 to-tranparent h-32 w-full bottom-0 z-10' />
      <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} interval={5000}>
        <div>
          <img src='https://links.papareact.com/gi1' alt='' />
        </div>
        <div>
          <img src='https://links.papareact.com/6ff' alt='' />
        </div>
        <div>
          <img src='https://links.papareact.com/7ma' alt='' />
        </div>
      </Carousel>
      {/* <div className='hidden sm:flex justify-evenly  bottom-0 left-0  w-full space-x-6 z-30'>
        <Widget title={'Dresses'} image='https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg' />
        <Widget title={'Easy Retruns'} image='https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg' />
        <Widget title={'Shop by Category'} image='https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg' />
        <Widget title={'See Another'} image='https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg' />
      </div> */}
    </div>
  );
};

export default Banner;
