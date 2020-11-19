let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://pokeapi.co/api/v2/pokemon/';

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function(e) {
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(API, function(error1, data1) {
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].name, function(error2, data2) {
        if(error2) return console.error(error2);
        fetchData(API + data2.results[1], function(error3, data3) {
            if(error3) return console.error(error3);
            console.log(data1.count);
            console.log(data2.name);
            console.log(data3.url.abilities);
        })
    })
})