import { useState, useEffect } from 'react';

const useWeatherAndTempFetch = (city) => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [weatherError, setWeatherError] = useState(null);

  const [tempData, setTempData] = useState(null);
  const [tempLoading, setTempLoading] = useState(true);
  const [tempError, setTempError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = () => {
      fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=d12e5ab9acce8b77a0e58a4fb1f97a5b`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((result) => {
          if (result && result.length > 0) {
            setWeatherData(result[0]);
          } else {
            throw new Error('No data found for the provided city.');
          }
        })
        .catch((error) => {
          setWeatherError(error.message);
        })
        .finally(() => {
          setWeatherLoading(false);
        });
    };

    fetchWeatherData();
  }, [city]);

  useEffect(() => {
    if (weatherData) {
      const { lat, lon } = weatherData;
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d12e5ab9acce8b77a0e58a4fb1f97a5b`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((result) => {
          setTempData(result.main.temp);
        })
        .catch((error) => {
          setTempError(error.message);
        })
        .finally(() => {
          setTempLoading(false);
        });
    }
  }, [weatherData]);

  return {
    weatherData,
    weatherLoading,
    weatherError,
    tempData,
    tempLoading,
    tempError,
  };
};

export default useWeatherAndTempFetch;
