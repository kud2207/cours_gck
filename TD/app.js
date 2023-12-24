const path = require('path');
const express = require('express');
const app = express();
const port = 3080;

app.use(express.static(path.join(__dirname, "views")))
app.use(express.static(path.join(__dirname, "public")))

/*
app.get('/', (req, res) => {
    res.send("<h1>CATECHDIGITAL 2000000</h1>");
});*/

app.listen(port,  _=>{
    console.log (`Connexion etablie sur le PORT : ${port}`)
})