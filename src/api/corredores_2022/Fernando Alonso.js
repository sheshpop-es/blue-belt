axios.get('https://ergast.com/api/f1/2022/drivers/alonso.json')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    })