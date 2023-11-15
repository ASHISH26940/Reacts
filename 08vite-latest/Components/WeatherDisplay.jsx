// WeatherDisplay.js
import React from 'react';
import weatherFetch from '../Hooks/weatherFetch';
import tempFetch from '../Hooks/tempFetch';

const WeatherDisplay = ({ city }) => {
  const { data, loading, error } = weatherFetch(city);
  const latitude=data?.lat
  const longitude=data?.lon
  console.log(latitude);
  const {temp,load,err}=tempFetch({latitude,longitude})
  console.log(temp);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <>
          <h2>Weather Information</h2>
          <p>Name: {data.name}</p>
          <p>Latitude: {data.lat}</p>
          <p>Longitude: {data.lon}</p>
          
        </>
      )}
    </div>
  );
};

export default WeatherDisplay;
