import React , {useEffect , useState , createContext} from 'react';

// import data
import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {

  const [houses , setHouses] = useState(housesData);
  const [country , setCountry] = useState('مکان شما...');
  const [countries , setCountries ] = useState([]);
  const [property, setProperty] = useState('ویلایی یا آپارتمان...');
  const [properties, setProperties] = useState([]);
  const [price , setPrice ] = useState('تراز مالی ...');
  const [loading, setLoading ] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    
    //remove duplicutes
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

    // set countries state
    setCountries(uniqueCountries);


  }, [] );


  //return all properties
  
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    
    //remove duplicutes
    const uniqueProperties = ['Location (any)', ...new Set(allProperties)];

    // set prperties state
    setProperties(uniqueProperties);

  }, [] );

  const handleClick = () => {

    //set loading
    setLoading(true);

    //create a function that checks if the string includes "(any)"
    const isDefault = (str) => {
      return str.split(' ').includes('(any)')
    };

    // get first value of price and parse it to number

     const minPrice = parseInt(price.split(" ")[0] );

    //get second value of price which is the maximum price & parse it to number
    
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) => {

      const housePrice = parseInt(house.price);

      // if all values are selected
      if(
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }


      // if all valute are default
      if(isDefault(country) && isDefault(property) && isDefault(price)){
        return house;
      }

      //if all country is not default 
      if(!isDefault(country) && isDefault(property) && isDefault(price)){
        return house.country === country;
      }

      //if property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)){
        return house.type === property;
      }

      //if price is not default
      if (!isDefault(price) && isDefault(country) && isDefault(property)){
        if ( housePrice >= minPrice && housePrice <= maxPrice ){
          return house;
        }
      }


      //if country & property is not default
      if(!isDefault(country) && !isDefault(property) && isDefault(price)){
        return house.country === country && house.type === property;
      }

      //if country & property is not default
      if (!isDefault(price) && !isDefault(country) && isDefault(property)){
        if ( housePrice >= minPrice && housePrice <= maxPrice ){
          return house.country === country;
        }
      }

      //if price & property is not default
      if (isDefault(price) && !isDefault(country) && !isDefault(property)){
        if ( housePrice >= minPrice && housePrice <= maxPrice ){
          return house.type ===  property;
        }
      }


    });
    
    setTimeout(() => {
      return (newHouses.length < 1 ? 
      setHouses([]) : 
      setHouses(newHouses), 
      setLoading(false)
      ); 
    } , 1000);
  };


  return (
    <HouseContext.Provider 
    
    value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,
      handleClick,
      loading,
    }}>
      {children}
    </HouseContext.Provider>
  )
};

export default HouseContextProvider;
