
export async function fetchData() {
    const response = await fetch('https://ergast.com/api/f1/2024/driverStandings.json');
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
      
    }
    const data = await response.json();
    return data;
    console.log(data)
  }
  