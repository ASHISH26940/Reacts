import React, { useState } from 'react';

const WeatherInput = ({ onCityChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCityChange(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter City:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default WeatherInput;