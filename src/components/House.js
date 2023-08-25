import React from 'react';

//import icons
import { BiBed , BiBath , BiArea } from 'react-icons/bi';

 

const House = ({ house }) => {

  const { image , type , country , address , bedrooms , bathrooms , surface , price } = house;

  return (
    <div className='bg-zinc-800 mt-10 shadow-1 p-5 rounded-lg rounded-tl-[200px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8' src={image} alt='' />
      <div className='mb-4 flex gap-x-2 text-sm' >
        <div className='bg-orange-600 rounded-full text-white px-3' >{type}</div>
        <div className='rounded-full text-white px-3 border-orange-600' >{country}</div>
      </div>
      <div className='text-lg text-slate-200 font-semibold max-w-[260px]'>{address}</div>


      <div className='flex gap-x-4 my-4'>

        <div className='flex items-center text-slate-300 gap-1' >
          <div className='text-[20px]'>
            <BiBed/>
          </div>
          <div>{bedrooms}</div>
        </div>

        <div className='flex items-center text-slate-300 gap-1' >
          <div className='text-[20px]'>
            <BiBath/>
          </div>
          <div>{ bathrooms }</div>
        </div>

        <div className='flex items-center text-slate-300 gap-1' >
          <div className='text-[20px]'>
            <BiArea/>
          </div>
          <div>{surface}</div>
        </div>


      </div>
      <div className='text-lg font-semibold text-orange-400 mb-4  text-left'>{price} تومان </div>
    </div>
  )
};

export default House;
