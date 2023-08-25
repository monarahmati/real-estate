import React , {useContext, useState} from 'react';

//import icons 
import { RiMapPinLine , RiArrowDownSLine , RiArrowUpSLine } from 'react-icons/ri';

//import headless ui
import { Menu } from '@headlessui/react';

//import houses context
import { HouseContext } from './HouseContext';


const CountryDropdown = () => {

  const { country , setCountry , countries } = useContext(HouseContext)
  

  const [isOpen , setIsOpen] = useState(false);


  return (
   <Menu as='div' className='dropdown relative'> 
    <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left ' >
      {/* <RiMapPinLine className='dropdown-icon-primary'/> */}

      <div >
        <div className='flex'>
 
          {
            isOpen ? (
              <RiArrowUpSLine  className='dropdown-icon-secondary text-orange-700'/>
            ) : (
              <RiArrowDownSLine className='dropdown-icon-secondary text-orange-700'/>
            )
          }

          <div>
            <div className='text-[15px] text-right font-medium leading-tight' >{country}</div>
            <div className='text-[13px]'> مکان مورد نظرتان را انتخاب کنید </div>
          </div> 

        </div>
      </div>
      <RiMapPinLine className='dropdown-icon-primary text-orange-700'/>
    </Menu.Button>

    <Menu.Items className='dropdown-menu'>
      {countries.map((country , index ) => {
        return (
          <Menu.Item 
            onClick={() => setCountry(country)}
            className='cursor-pointer hover:text-orange-700 transition' as='li' key={index}
          >
            {country}
          </Menu.Item>
        )
      })}
    </Menu.Items>
   </Menu>
  )
};

export default CountryDropdown;
