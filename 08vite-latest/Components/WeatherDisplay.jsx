import React, { useEffect } from 'react';
import useWeatherAndTempFetch from '../Hooks/useWeatherAndTempFetch';

const WeatherDisplay = ({ city }) => {
  const {
    weatherData,
    weatherLoading,
    weatherError,
    tempData,
    tempLoading,
    tempError,
  } = useWeatherAndTempFetch(city);

  useEffect(() => {
    // Additional logic you may want to perform when city changes
  }, [city]);

  return (
    <div>
      {weatherLoading && <p>Loading weather...</p>}
      {weatherError && <p>Error fetching weather: {weatherError}</p>}
      {weatherData && (
        <>
          <h2>Weather Information</h2>
          <p>Name: {weatherData.name}</p>
          <p>Latitude: {weatherData.lat}</p>
          <p>Longitude: {weatherData.lon}</p>
        </>
      )}

      {tempLoading && <p>Loading temperature...</p>}
      {tempError && <p>Error fetching temperature: {tempError}</p>}
      {tempData && <p>Temperature: {tempData}</p>}
    </div>
  );
};

export default WeatherDisplay;