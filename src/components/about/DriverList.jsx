// src/components/DriversList.jsx

import { useState, useEffect } from 'react';
import axios from 'axios';

const DriversList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    // Realiza la solicitud a la API
    axios.get('https://ergast.com/api/f1/2024/driverStandings.json')
      .then(response => {
        const driverStandings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        setDrivers(driverStandings);
      })
      .catch(error => {
        console.error('Error fetching the drivers:', error);
      });
  }, []);

  return (
    <div>
      {drivers.map(driver => (
        <div key={driver.Driver.driverId} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <h3>{driver.Driver.givenName} {driver.Driver.familyName}</h3>
          <p>Points: {driver.points}</p>
          <p>Date of Birth: {new Date(driver.Driver.dateOfBirth).toLocaleDateString()}</p>
          <p>Country: {driver.Driver.nationality}</p>
        </div>
      ))}
    </div>
  );
};

export default DriversList;