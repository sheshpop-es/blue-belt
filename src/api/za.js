const fetchDrivers = (year) => {
    return axios.get(`http://ergast.com/api/f1/${year}/drivers.json`)
        .then(response => {
            return response.data.MRData.DriverTable.Drivers;
        });
}

const fetchDriverDetails = (driverId) => {
    return axios.get(`https://ergast.com/api/f1/drivers/${driverId}.json`)
        .then(response => {
            return response.data;
        });
}

const displayDrivers = async () => {
    const years = [2022, 2023, 2024];
    for (let year of years) {
        let drivers = await fetchDrivers(year);
        const driversContainer = document.getElementById(`drivers-${year}`);
        for (let driver of drivers) {
            let driverDetails = await fetchDriverDetails(driver.driverId);
            let driverDiv = document.createElement('div');
            driverDiv.className = 'driver';
            driverDiv.innerHTML = `
                <img src="images/${driver.driverId}.jpg" alt="${driver.givenName} ${driver.familyName}">
                <h3>${driver.givenName} ${driver.familyName}</h3>
                <p>Fecha de Nacimiento: ${driver.dateOfBirth}</p>
                <p>Nacionalidad: ${driver.nationality}</p>
            `;
            driversContainer.appendChild(driverDiv);
        }
    }
}

displayDrivers();