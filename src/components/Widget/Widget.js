import React from 'react';
import Image from 'next/image';
const Widget = ({ title, image }) => {
  return (
    <div className='bg-white rounded-[12px] p-3 relative'>
      {/* top */}
      <div className='mb-5'>
        <p className='text-[22px]'>{title}</p>
      </div>
      {/* Image */}
      <div>
        <Image src={image} width={300} height={200} alt='' className='object-contain' />
      </div>
      {/* link */}
      <div>
        <p className='link'>see Detail</p>
      </div>
    </div>
  );
};

export default Widget;
