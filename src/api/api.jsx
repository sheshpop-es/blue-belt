import { fetch } from '@astro/client';

const response = await fetch('https://ergast.com/api/f1/drivers/alonso');
const data = await response.json();

// Usa los datos de la API como necesites
console.log(data);
