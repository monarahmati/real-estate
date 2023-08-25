import React , {useContext, useEffect , useState} from 'react';

//import icons 
import { RiWallet3Line , RiArrowDownSLine , RiArrowUpSLine } from 'react-icons/ri';

//import headless ui
import { Menu } from '@headlessui/react';

//import houses context
import { HouseContext } from './HouseContext';


const PriceRangeDropdown = () => {

  const { price , setPrice } = useContext(HouseContext)

  console.log(price);
  

  const [isOpen , setIsOpen] = useState(false);

  const prices = [
    {
      value:'Price range (any)',
    },
    {
      value:'10000 - 13000',
    },
    {
      value:'13000 - 16000',
    },
    {
      value:'19000 - 22000',
    },
    {
      value:'10000 - 30000',
    },
    {
      value:'30000 - 40000',
    },
  ]


  return (
   <Menu as='div' className='dropdown relative'> 
    <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left' >

      <div>
        <div className='flex ' >


        {
          isOpen ? (
            <RiArrowUpSLine  className='dropdown-icon-secondary text-orange-700'/>
            ) : (
              <RiArrowDownSLine className='dropdown-icon-secondary text-orange-700'/>
              )
        }

        
          <div>
            <div className='text-[15px] text-right font-medium leading-tight' > {price} </div>
            <div className='text-[13px]'> محدود قیمت  خود را تعیین کنید </div>
          </div>  

          <RiWallet3Line className='dropdown-icon-primary text-orange-700'/>
        </div>
      </div>
    </Menu.Button>

    <Menu.Items className='dropdown-menu'>
      {prices.map((price , index ) => {
        return (
          <Menu.Item 
            onClick={() => setPrice(price.value)}
            className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}
          >
           {price.value} تومان
          </Menu.Item>
        )
      })}
    </Menu.Items>
   </Menu>
  )
};

export default PriceRangeDropdown;
