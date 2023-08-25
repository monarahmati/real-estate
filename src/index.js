import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Routers
import { BrowserRouter  } from 'react-router-dom';

//import house context provider
import HouseContextProvider from './components/HouseContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
<HouseContextProvider>
  <BrowserRouter>
       <App />
  </BrowserRouter>
</HouseContextProvider>
);
