import React from 'react';

//import image
import Image from '../assets/img/bernard-hermant-KqOLr8OiQLU-unsplash.jpg'

//import components
import Search from '../components/Search';

const Banner = () => {
  return (
  <section dir="ltr" className='h-full max-h-[640px] mb-8 xl:mb-24'>
    <div className='flex flex-col lg:flex-row'>
      <div  className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-right justify-center flex-1 px-4 lg:px-0' >
        <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6 text-stone-200'>
          <span className='text-orange-600'>اجاره </span>
          خانه رویایی شما
        </h1>
        <p className='max-w-[480px] mb-8 text-stone-200'>
        خانه‌های رویایی جهان، انواع ساختمان‌هایی هستند
        که دارای ویژگی‌های خاصی می‌باشند.
        خانه‌های رویایی در دسته خانه‌های لوکس با امکانات و تجهیزات متنوع قرار می‌گیرند
        و نحوه طراحی و اجرای سازه در آنها به صورت متفاوتی است. طراحی خانه‌های رویایی برگرفته از ایده‌های جالبی است که الهام‌ بخش طراحان و سازندگان آنها می‌باشد.  
        </p>
      </div>


       {/* Image */}
       <div className='hidden flex-1 lg:flex justify-end items-end shadow-xl-white'>
         <img className='rounded-t-[400px]'  src={Image} alt=''/>
       </div>
    </div>
     
    <Search dir='rtl' />
  </section>
  )
};

export default Banner;
