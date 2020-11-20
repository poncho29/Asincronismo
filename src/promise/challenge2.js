const fetchData = require('../utils/fetchData'); //Importamos el archivo
const API = 'https://pokeapi.co/api/v2/pokemon/';

fetchData(API)
    .then(data => {
        console.log(data.count);
        return fetchData(`${API}${data.results[0].name}`)
    })
    .then(data => {
        console.log(data.name);
    })
    .catch(err => console.error(err));