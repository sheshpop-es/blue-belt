axios.get('http://ergast.com/api/f1/2022/drivers/Vettel.json')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    })