import React, { useState, useEffect } from "react";
import "./App.css";
const url = "https://restcountries.com/v3.1/all";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState(true);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
      setError(null);
      console.log(countries);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);

  return <div className="App"></div>;
}

export default App;
