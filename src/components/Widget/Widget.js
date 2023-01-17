import React from 'react';
import Image from 'next/image';
const Widget = ({ title, image }) => {
  return (
    <div className='bg-white flex flex-col justify-between rounded-[12px] p-3 relative z-40'>
      {/* top */}
      <div className='mb-5'>
        <p className='text-[13px] md:text-[18px] lg:text-[22px]'>{title}</p>
      </div>
      {/* Image */}
      <div>
        <Image src={image} width={300} height={200} alt='' className='object-contain' />
      </div>
      {/* link */}
      <div>
        <p className='link text-[12px] md:text-[18px] max-w-max text-gray-600'>see more ...</p>
      </div>
    </div>
  );
};

export default Widget;
