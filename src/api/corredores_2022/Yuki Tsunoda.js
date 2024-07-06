axios.get('http://ergast.com/api/f1/2022/drivers/Tsunoda.json')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    })