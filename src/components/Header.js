import React , {useState} from 'react';

//import links
import { Link } from 'react-router-dom';

//import logo
import Logo from '../assets/img/mahan-home-logo.png';
import close  from '../assets/img/close.svg'
import  menu  from '../assets/img/menu.svg'



const Header = () => {

  const [ toggle , setToggle] = useState(false);


  return (
    <header className='py-6 mb-12  bg-zinc-700'>
      <div className='container mx-auto flex justify-between items-center'>

        {/* menu */}

        <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setToggle((prev) => !prev)}
          >
            <span className="block h-0.5 w-7 animate-pulse bg-stone-100"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-stone-200"></span>
            <span className="block h-0.5 w-9 animate-pulse bg-stone-300"></span>
          </div>

          <div className={toggle ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setToggle(false)}
            >
              <svg
                className="h-9 w-9 text-gray-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            
                <ul className='mx-auto text-xl flex justify-between text-stone-100  items-center flex-col'>
                  <li className='my-5'>
                    <Link to="/">صفحه اصلی</Link>
                  </li>
                  <li className='my-5'>
                    <Link to="/branches" >آدرس شعب</Link>
                  </li>
                  <li className='my-5'>
                    <Link to="/service" > خدمات ما</Link>
                  </li>
                  <li className='my-5'>
                   <Link to="/contact" >تماس با ما</Link>
                  </li>
                  <li className='my-5'>
                    <Link to="/about" >درباره ما</Link>
                  </li>
                </ul>


          </div>
        </section>

        <ul className="DESKTOP-MENU hidden text-stone-100 space-x-8 lg:flex">
          <li className='ml-5'>
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li className='ml-5'>
            <Link to="/branches" >آدرس شعب</Link>
          </li>
          <li className='ml-5'>
            <Link to="/service" > خدمات ما</Link>
          </li>
          <li className='ml-5'>
           <Link to="/contact" >تماس با ما</Link>
          </li>
          <li className='ml-5'>
             <Link to="/about" >درباره ما</Link>
          </li>
        </ul>
      </nav>


        {/* Logo */}
        <Link to='/'>
          <img className='h-25 w-40 sm:w-20 ss:w-8 ' src={Logo} alt='' />
        </Link>


      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 250px;
        height: 50vh;
        top: 30px;
        right: 30px;
        background: #57534e;
        border-rediuser: 50px ;
        border-radius:50px;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </header>
  )
};

export default Header;


{/* <div className="sm:hidden flex flex-1 justify-end items-center">
<img 
  src={toggle ? close : menu}
  alt="menu"
  className="w-[28px] h-[28px] object-contain"
  onClick={() => setToggle((prev) => !prev) }
  />
</div> */}


<div  className='xl:visible sm:invisible text-stone-100'>
<ul className='mx-auto flex justify-between items-center'>
  <li className='ml-5'>
    <Link to="/">صفحه اصلی</Link>
  </li>
  <li className='ml-5'>
    <Link to="/branches" >آدرس شعب</Link>
  </li>
  <li className='ml-5'>
    <Link to="/service" > خدمات ما</Link>
  </li>
  <li className='ml-5'>
    <Link to="/contact" >تماس با ما</Link>
  </li>
  <li className='ml-5'>
    <Link to="/about" >درباره ما</Link>
  </li>
</ul>
</div>