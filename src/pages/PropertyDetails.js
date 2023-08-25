import React from 'react';

// import data
import { housesData } from '../data';

// import use params
import { useParams } from 'react-router-dom';

//import icons 
import { BiBed , BiBath , BiArea } from 'react-icons/bi' 

//import Links
import {Link} from 'react-router-dom';



const PropertyDetails = () => {

  //get the house id 
  const {id } = useParams();

  //get the house based on the id
  const house = housesData.find((house) =>{
    return house.id === parseInt(id)
  });

  console.log(house)

  return (
    <section>
      <div className='container mx-auto min-h-[800px] mb-14' >
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-2xl  text-stone-200 font-semibold' >{house.name}</h2>
            <h3 className='text-lg text-stone-200 mb-4' >{house.address}</h3>
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='bg-orange-500 text-white px-3 rounded-full'>{house.type}</div>
            <div className='border-orange-600 text-white px-3 rounded-full' >{house.country}</div>
          </div>               
          <div className='text-3xl font-semibold text-orange-600' > {house.price} تومان</div>
        </div>

        <div className='flex flex-col items-start gap-8 lg:flex-row' >
          <div className='max-w-[768px]' >
            <div className='mb-8' >
              <img src={house.imageLg} alt='' />
            </div>
            <div className='flex gap-x-6 text-orange-500 mb-6'>
              <div className='flex gap-x-2 items-center' >
                <BiBed className='text-2xl' />
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center' >
                <BiBath className='text-2xl' />
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center' >
                <BiArea  className='text-2xl'  />
                <div>{house.surface}</div>
              </div>
            </div>
            <div className='text-stone-500' >{house.description}</div>
          </div>

          <div className='flex-1 bg-stone-200 w-full mb-8 border border-gray-300 rounded-lg px-6 py-8' >
            <div className='flex items-center gap-x-4 mb-8' >
              <div className='w-20 h-20 p-1 border border-gray-300 rounded-full' >
                <img src={house.agent.image} alt='' />
              </div>
              <div>
                <div className='font-bold text-lg' >{house.agent.name}</div>
                <Link to='' className='text-gray-700 text-sm'> رزرو مشاوره تلفنی </Link>
              </div>
            </div>

            {/* from */}


            <form className='flex flex-col gap-y-4'>
              <input className='border border-gray-300 focus:border-violet-400 outline-none rounded-xl w-full h-14 px-4 text-sm ' placeholder='name' type='text'/>
              <input className='border border-gray-300 focus:border-violet-400 outline-none rounded-xl w-full h-14 px-4 text-sm ' placeholder='email' type='text'/>
              <input className='border border-gray-300 focus:border-violet-400 outline-none rounded-xl w-full h-14 px-4 text-sm ' placeholder='phone' type='text'/>
              <textarea
                className='border  border-gray-300 focus:border-violet-400 outline-none rounded-xl w-full h-36 px-4 text-sm text-gray-400'
                placeholder='Message'
                defaultValue='hello I am interested in [modern apartement]'>

              </textarea>
              <div className='flex gap-x-2' >
                <button className='bg-orange-700 hover:bg-orange-800 text-white rounded p-4 w-full transition text-sm' >
                  ارسال پیام
                </button>
                <button className='border border-orange-700 text-orange-700 hover:border-orange-500 hover:text-violet-500 rounded p-4  text-sm w-full transition'>
                  تماس
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

export default PropertyDetails;


// https://github.com/monarahmati/real-estate-site