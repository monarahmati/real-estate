// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'خانه',
    name: 'خانه 1',
    description:"  خانه‌های رویایی جهان، انواع ساختمان‌هایی هستن که دارای ویژگی‌های خاصی می‌باشند. خانه‌های رویایی در دسته خانه‌های لوکس با امکانات و تجهیزات متنوع قرار می‌گیرند  و نحوه طراحی و اجرای سازه در آنها به صورت متفاوتی است. طراحی خانه‌های رویایی برگرفته از ایده‌های جالبی است که الهام‌ بخش طراحان و سازندگان آنها می‌باشد. ",
    image: House1,
    imageLg: House1Lg,
    country: 'تهران',
    address: "پونک خیابان نسیم",
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '1385',
    price: '110000',
    agent: {
      image: Agent1,
      name: 'خانوم شایسته',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'خانه',
    name: 'خانه 2',
    description: 'خانه‌های رویایی جهان، انواع ساختمان‌هایی هستن که دارای ویژگی‌های خاصی می‌باشند. خانه‌های رویایی در دسته خانه‌های لوکس با امکانات و تجهیزات متنوع قرار می‌گیرند و نحوه طراحی و اجرای سازه در آنها به صورت متفاوتی است. طراحی خانه‌های رویایی برگرفته از ایده‌های جالبی است که الهام‌ بخش طراحان و سازندگان آنها می‌باشد',
    image: House2,
    imageLg: House2Lg,
    country: 'کرج',
    address: 'مهر شهر 2 فلکه استقلال',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '1390',
    price: '140000',
    agent: {
      image: Agent2,
      name: 'اقای اسدی',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'خانه',
    name: 'خانه 3',
    description: 'خانه‌های رویایی جهان، انواع ساختمان‌هایی هستن که دارای ویژگی‌های خاصی می‌باشند. خانه‌های رویایی در دسته خانه‌های لوکس با امکانات و تجهیزات متنوع قرار می‌گیرند و نحوه طراحی و اجرای سازه در آنها به صورت متفاوتی است. طراحی خانه‌های رویایی برگرفته از ایده‌های جالبی است که الهام‌ بخش طراحان و سازندگان آنها می‌باشد',
    image: House3,
    imageLg: House3Lg,
    country: 'تهران',
    address: 'مهرشهر  میدان سرباز خیابان نور',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '1382',
    price: '170000',
    agent: {
      image: Agent3,
      name: 'اقای نوری',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'خانه',
    name: 'خانه 4',
    description: 'خانه‌های رویایی جهان، انواع ساختمان‌هایی هستن که دارای ویژگی‌های خاصی می‌باشند. خانه‌های رویایی در دسته خانه‌های لوکس با امکانات و تجهیزات متنوع قرار می‌گیرند و نحوه طراحی و اجرای سازه در آنها به صورت متفاوتی است. طراحی خانه‌های رویایی برگرفته از ایده‌های جالبی است که الهام‌ بخش طراحان و سازندگان آنها می‌باشد',
    image: House4,
    imageLg: House4Lg,
    country: 'کرج',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '200000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'خانه',
    name: 'خانه 5',
    description: 'خانه‌های رویایی جهان، انواع ساختمان‌هایی هستن که دارای ویژگی‌های خاصی می‌باشند. خانه‌های رویایی در دسته خانه‌های لوکس با امکانات و تجهیزات متنوع قرار می‌گیرند و نحوه طراحی و اجرای سازه در آنها به صورت متفاوتی است. طراحی خانه‌های رویایی برگرفته از ایده‌های جالبی است که الهام‌ بخش طراحان و سازندگان آنها می‌باشد',
    image: House5,
    imageLg: House5Lg,
    country: 'تهران',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '210000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'خانه',
    name: 'خانه 6',
    description: 'خانه‌های رویایی جهان، انواع ساختمان‌هایی هستن که دارای ویژگی‌های خاصی می‌باشند. خانه‌های رویایی در دسته خانه‌های لوکس با امکانات و تجهیزات متنوع قرار می‌گیرند و نحوه طراحی و اجرای سازه در آنها به صورت متفاوتی است. طراحی خانه‌های رویایی برگرفته از ایده‌های جالبی است که الهام‌ بخش طراحان و سازندگان آنها می‌باشد',
    image: House6,
    imageLg: House6Lg,
    country: 'کرج',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: '220000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'آپارتمان',
    name: "آپارتمان 4",
    description: 'خانه‌های رویایی جهان، انواع ساختمان‌هایی هستن که دارای ویژگی‌های خاصی می‌باشند. خانه‌های رویایی در دسته خانه‌های لوکس با امکانات و تجهیزات متنوع قرار می‌گیرند و نحوه طراحی و اجرای سازه در آنها به صورت متفاوتی است. طراحی خانه‌های رویایی برگرفته از ایده‌های جالبی است که الهام‌ بخش طراحان و سازندگان آنها می‌باشد',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'کرج',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: '20000',
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'آپارتمان',
    name:"آپارتمان 3",
    description: 'خانه‌های رویایی جهان، انواع ساختمان‌هایی هستن که دارای ویژگی‌های خاصی می‌باشند. خانه‌های رویایی در دسته خانه‌های لوکس با امکانات و تجهیزات متنوع قرار می‌گیرند و نحوه طراحی و اجرای سازه در آنها به صورت متفاوتی است. طراحی خانه‌های رویایی برگرفته از ایده‌های جالبی است که الهام‌ بخش طراحان و سازندگان آنها می‌باشد',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'تهران',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: '30000',
    agent: {
      image: Agent8,
      name: 'Juana Douglass',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'آپارتمان',
    name: "خانه 3",
    description: 'خانه‌های رویایی جهان، انواع ساختمان‌هایی هستن که دارای ویژگی‌های خاصی می‌باشند. خانه‌های رویایی در دسته خانه‌های لوکس با امکانات و تجهیزات متنوع قرار می‌گیرند و نحوه طراحی و اجرای سازه در آنها به صورت متفاوتی است. طراحی خانه‌های رویایی برگرفته از ایده‌های جالبی است که الهام‌ بخش طراحان و سازندگان آنها می‌باشد',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'تهران',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: '40000',
    agent: {
      image: Agent9,
      name: 'Jerry Schenck',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'خانه',
    name: 'خانه 7',
    description: 'خانه‌های رویایی جهان، انواع ساختمان‌هایی هستن که دارای ویژگی‌های خاصی می‌باشند. خانه‌های رویایی در دسته خانه‌های لوکس با امکانات و تجهیزات متنوع قرار می‌گیرند و نحوه طراحی و اجرای سازه در آنها به صورت متفاوتی است. طراحی خانه‌های رویایی برگرفته از ایده‌های جالبی است که الهام‌ بخش طراحان و سازندگان آنها می‌باشد',
    image: House7,
    imageLg: House7Lg,
    country: 'کرج',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: '117000',
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'خانه',
    name: 'خانه 8',
    description: 'خانه‌های رویایی جهان، انواع ساختمان‌هایی هستن که دارای ویژگی‌های خاصی می‌باشند. خانه‌های رویایی در دسته خانه‌های لوکس با امکانات و تجهیزات متنوع قرار می‌گیرند و نحوه طراحی و اجرای سازه در آنها به صورت متفاوتی است. طراحی خانه‌های رویایی برگرفته از ایده‌های جالبی است که الهام‌ بخش طراحان و سازندگان آنها می‌باشد',
    image: House8,
    imageLg: House8Lg,
    country: 'کرج',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '145000',
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'خانه',
    name: 'خانه 9',
    description: 'خانه‌های رویایی جهان، انواع ساختمان‌هایی هستن که دارای ویژگی‌های خاصی می‌باشند. خانه‌های رویایی در دسته خانه‌های لوکس با امکانات و تجهیزات متنوع قرار می‌گیرند و نحوه طراحی و اجرای سازه در آنها به صورت متفاوتی است. طراحی خانه‌های رویایی برگرفته از ایده‌های جالبی است که الهام‌ بخش طراحان و سازندگان آنها می‌باشد',
    image: House9,
    imageLg: House9Lg,
    country: 'تهران',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '139000',
    agent: {
      image: Agent12,
      name: 'Raymond Hood',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'خانه',
    name: 'خانه 10',
    description: 'خانه‌های رویایی جهان، انواع ساختمان‌هایی هستن که دارای ویژگی‌های خاصی می‌باشند. خانه‌های رویایی در دسته خانه‌های لوکس با امکانات و تجهیزات متنوع قرار می‌گیرند و نحوه طراحی و اجرای سازه در آنها به صورت متفاوتی است. طراحی خانه‌های رویایی برگرفته از ایده‌های جالبی است که الهام‌ بخش طراحان و سازندگان آنها می‌باشد',
    image: House10,
    imageLg: House10Lg,
    country: 'کرج',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '1387',
    price: '180000',
    agent: {
      image: Agent1,
      name: 'خانوم اسدی',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'خانه',
    name: 'خانه 11',
    description: 'خانه‌های رویایی جهان، انواع ساختمان‌هایی هستن که دارای ویژگی‌های خاصی می‌باشند. خانه‌های رویایی در دسته خانه‌های لوکس با امکانات و تجهیزات متنوع قرار می‌گیرند و نحوه طراحی و اجرای سازه در آنها به صورت متفاوتی است. طراحی خانه‌های رویایی برگرفته از ایده‌های جالبی است که الهام‌ بخش طراحان و سازندگان آنها می‌باشد',
    image: House11,
    imageLg: House11Lg,
    country: 'تهران',
    address: 'سعادت اباد جنب  خیابان جنت',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2011',
    price: '213000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'خانه',
    name: 'خانه 12',
    description: 'خانه‌های رویایی جهان، انواع ساختمان‌هایی هستن که دارای ویژگی‌های خاصی می‌باشند. خانه‌های رویایی در دسته خانه‌های لوکس با امکانات و تجهیزات متنوع قرار می‌گیرند و نحوه طراحی و اجرای سازه در آنها به صورت متفاوتی است. طراحی خانه‌های رویایی برگرفته از ایده‌های جالبی است که الهام‌ بخش طراحان و سازندگان آنها می‌باشد',
    image: House12,
    imageLg: House12Lg,
    country: 'کرج',
    address: 'مهرشهر1 کوچه نور',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: '221000',
    agent: {
      image: Agent3,
      name: 'اقای نیسی',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'آپارتمان',
    name: 'ساختمان نور',
    description: 'خانه‌های رویایی جهان، انواع ساختمان‌هایی هستن که دارای ویژگی‌های خاصی می‌باشند. خانه‌های رویایی در دسته خانه‌های لوکس با امکانات و تجهیزات متنوع قرار می‌گیرند و نحوه طراحی و اجرای سازه در آنها به صورت متفاوتی است. طراحی خانه‌های رویایی برگرفته از ایده‌های جالبی است که الهام‌ بخش طراحان و سازندگان آنها می‌باشد',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'کرج',
    address: 'مهرشهر 3 روبری پارک لاله',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '1388',
    price: '21000',
    agent: {
      image: Agent4,
      name: 'خانوم مبینا اسدی',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'آپارتمان',
    name: 'ساختمان افتاب',
    description: 'خانه‌های رویایی جهان، انواع ساختمان‌هایی هستن که دارای ویژگی‌های خاصی می‌باشند. خانه‌های رویایی در دسته خانه‌های لوکس با امکانات و تجهیزات متنوع قرار می‌گیرند و نحوه طراحی و اجرای سازه در آنها به صورت متفاوتی است. طراحی خانه‌های رویایی برگرفته از ایده‌های جالبی است که الهام‌ بخش طراحان و سازندگان آنها می‌باشد',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'تهران',
    address: 'سهرنوردی کوچه توحید3',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '1395',
    price: '32000',
    agent: {
      image: Agent5,
      name: 'آقای رِئوفی',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'آپارتمان',
    name: 'ساختمان آسمان',
    description: 'خانه‌های رویایی جهان، انواع ساختمان‌هایی هستن که دارای ویژگی‌های خاصی می‌باشند. خانه‌های رویایی در دسته خانه‌های لوکس با امکانات و تجهیزات متنوع قرار می‌گیرند و نحوه طراحی و اجرای سازه در آنها به صورت متفاوتی است. طراحی خانه‌های رویایی برگرفته از ایده‌های جالبی است که الهام‌ بخش طراحان و سازندگان آنها می‌باشد',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'کرج',
    address: 'صادقیه . کوچه نرگس  پلاک 14 ساختمان اسمان طبقه اول',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '1390',
    price: '38000',
    agent: {
      image: Agent6,
      name: 'خانم شکری',
      phone: '09185554433',
    },
  },
];
