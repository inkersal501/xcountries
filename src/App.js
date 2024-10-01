 
import React, { useState, useEffect } from 'react';
import './App.css';
import Countries from './Countries';
import axios from "axios";

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
        try {
        const data = await axios.get(
            "https://xcountries-backend.azurewebsites.net/all"
        ); 
        setCountries(data.data);          
        } catch (error) {
          console.error(`Error fetching data: ${error}`);
        }
    };
    setTimeout(() => {
      fetchCountries(); 
      console.log(countries);
    }, 300);    
     
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="App">
      <div className='countriesList'>
        {countries.map(country=>(
            <Countries country={country} />   
        ))
        }
      </div>
    </div>
  );
}

export default App;
