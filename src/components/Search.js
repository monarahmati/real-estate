import React, { useContext } from 'react';


// import components 

import CountryDropdown  from  './CountryDropdown';
import PropertyDropdown from  './PropertyDropdown';
import PriceRangeDropdown from  './PriceRangeDropdown';

// import icons
import {RiSearch2Line} from 'react-icons/ri'

// import context 
import { HouseContext } from './HouseContext';

const Search = () => {

  const {handleClick}  = useContext(HouseContext)
  
  return(
    <div dir='rtl' className='px-[36px] py-6 max-w-[1170px] mx-auto sm:mx-10 ss:mx-10 flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-stone-200  lg:backdrop-blur rounded-lg'>
      <CountryDropdown/>
      <PropertyDropdown/>
      <PriceRangeDropdown/>

      <button onClick={() => handleClick()} className='bg-orange-600 hover:bg-orange-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'>
        <RiSearch2Line/>
      </button>
    </div>
  );
};

export default Search;
