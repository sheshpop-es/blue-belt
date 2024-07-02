axios.get('http://ergast.com/api/f1/2023/drivers/Lawson.json')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    })