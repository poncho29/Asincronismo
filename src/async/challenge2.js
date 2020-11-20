const fetchData = require('../utils/fetchData');
const API = 'https://pokeapi.co/api/v2/pokemon/';

const traerPokemos = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const name = await fetchData(`${API}${data.results[0].name}`);
        console.log(data.count);
        console.log(name.name);
    } catch(error) {
        console.error(error);
    }
}

traerPokemos(API);