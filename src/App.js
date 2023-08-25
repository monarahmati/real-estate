import React from 'react';

//import routers and route
import { Routes , Route } from 'react-router-dom';

//import components
import Header from './components/Header';
import Footer from './components/Footer'
import Branches from './components/Branches';

//import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Services from './components/Services';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';

const App = () => {
  return (

  <div className='max-w-[1440px] mx-auto bg-zinc-900'>
    <Header/>
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/branches' element={ <Branches/> } />
      <Route path='/service' element={ <Services/> } />
      <Route path='/contact' element={ <Contact/> } />
      <Route path='/about' element={ <Aboutus/> } />
      <Route path='/property/:id' element={<PropertyDetails/>} />
    </Routes>
    <Footer/>

  </div>
  )
};

export default App;
