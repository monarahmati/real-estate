import React , {useContext,  useState} from 'react';

//import icons 
import { RiHome5Line , RiArrowDownSLine , RiArrowUpSLine } from 'react-icons/ri';

//import headless ui
import { Menu } from '@headlessui/react';

//import houses context
import { HouseContext } from './HouseContext';


const PropertyDropdown = () => {

  const { property , setProperty , properties } = useContext(HouseContext)

  console.log(properties);
  

  const [isOpen , setIsOpen] = useState(false);


  return (
   <Menu as='div' className='dropdown relative'> 
    <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left' >
      {/* <RiHome5Line className='dropdown-icon-primary'/> */}
      <div>
        <div className='flex' >

        {
          isOpen ? (
            <RiArrowUpSLine  className='dropdown-icon-secondary text-orange-700'/>
          ) : (
            <RiArrowDownSLine className='dropdown-icon-secondary text-orange-700'/>
            )
        }

        <div>
          <div className='text-[15px] text-right font-medium leading-tight' > {property} </div>
          <div className='text-[13px]'> منزل خود را انتخاب کنید</div>
        </div>

        </div>
      </div>
      <RiHome5Line className='dropdown-icon-primary text-orange-700'/>
    </Menu.Button>

    <Menu.Items className='dropdown-menu'>
      {properties.map((property , index ) => {
        return (
          <Menu.Item 
            onClick={() => setProperty(property)}
            className='cursor-pointer hover:text-orange-700 transition' as='li' key={index}
          >
            {property}
          </Menu.Item>
        )
      })}
    </Menu.Items>
   </Menu>
  )
};

export default PropertyDropdown;

