import React, { useState } from 'react';

const WeatherInput = ({ onCityChange }) => {
  const [city, setCity] = useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCityChange(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter city:
        <input type="text" value={city} onChange={handleChange} />
      </label>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherInput;
