import React from 'react';

const container = ({ driver }) => {
  const { givenName, familyName, dateOfBirth, nationality } = driver.Driver;
  const { points } = driver;

  return (
    <div style={{ width: '300px', height: '200px', border: '2px solid black', marginTop: '20px', padding: '10px', boxSizing: 'border-box' }}>
      <p><strong>Nombre:</strong> {givenName} {familyName}</p>
      <p><strong>Puntos:</strong> {points}</p>
      <p><strong>Fecha de Nacimiento:</strong> {new Date(dateOfBirth).toLocaleDateString()}</p>
      <p><strong>Nacionalidad:</strong> {nationality}</p>
    </div>
  );
};

export default container;