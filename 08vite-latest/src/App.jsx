import React, { useState } from 'react';
import WeatherInput from '../Components/WeatherInput';
import WeatherDisplay from '../Components/WeatherDisplay'

const App = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <div>
      <WeatherInput onCityChange={handleCityChange} />
      <WeatherDisplay city={selectedCity} />
    </div>
  );
};

export default App