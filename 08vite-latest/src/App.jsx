import React, { useState } from 'react';
import WeatherDisplay from '../Components/WeatherDisplay'
import WeatherInput from '../Components/WeatherInput'
import weatherFetch from '../Hooks/weatherFetch';

const App = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedLat,setselectedLat]=useState('');
  const [selectedLon,setselectedLon]=useState('');
  const handleCityChange = (city) => {
    setSelectedCity(city);
  };
  const handleLat= (lat)=>{
    setselectedLat(lat);
    
  }
  const handleLon=()=>{
    setselectedLon(lon)
  }


  const { data, loading, error } = weatherFetch(selectedCity);

  return (
    <div>
      <WeatherInput onCityChange={handleCityChange} />
      <WeatherDisplay city={selectedCity} />

    </div>
  );
};

export default App;
