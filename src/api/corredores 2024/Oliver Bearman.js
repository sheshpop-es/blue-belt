axios.get('http://ergast.com/api/f1/2024/drivers/Bearman.json')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    })