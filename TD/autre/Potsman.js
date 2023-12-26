/*const req = require("postman-request")

req  ("https://dog.ceo/api/breeds/image/random" , (error, response , body )=>{

const {message, statuts} = JSON.parse(body);
console.log(message)

})*/

fetch('https://dog.ceo/api/breeds/image/random')
    .then(res =>res.json())
    .then(data =>console.log(data.statuts))
