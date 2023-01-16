import { Icon } from '@iconify/react';
import { useState } from 'react';

const ProductCard = ({ data }) => {
  const [love, setLove] = useState(false);
  return (
    <div className='relative m-2 bg-white rounded-lg p-3 w-[27%] mt-6  '>
      {/* top */}
      <div>
        <p className='text-[16px] font-semibold text-gray-800 '>{data?.title}</p>
      </div>
      {/* center */}
      <div className='mt-3'>
        <img src={data?.image} alt='' className='object-contain  w-[340px] h-[250px]' />
      </div>
      <div className='absolute right-0 top-[70px] space-y-1 flex flex-col bg-gray-500 p-1 bg-opacity-70 rounded-xl'>
        {!love ? (
          <div
            onClick={() => {
              setLove(true);
            }}
          >
            <Icon className='link' color='white' icon='icon-park-outline:like' width={25} height={25} />
          </div>
        ) : (
          <div onClick={() => setLove(false)}>
            <Icon className='link' color='white' icon='flat-color-icons:like' width={25} height={25} />
          </div>
        )}
        <Icon className='link' color='white' icon='ic:sharp-plus' width={25} height={25} />
        <Icon className='link' color='white' icon='ic:outline-shopping-cart' width={25} height={25} />
      </div>
      {/* bottom */}
      <div className='absolute text-gray-900 font-semibold bottom-0 text-[17px] bg-gray-200 p-1 rounded-lg max-w-max cursor-pointer'>
        <p>$ {data.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
