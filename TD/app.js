const path = require('path');
const { engine } = require('express-handlebars') //division html
const express = require('express');

const app = express();
const port = 3090;

app.engine('handlebars' , engine()); //obligatoir handlebars
app.set('view engine' , 'handlebars');//obligatoir handlebars
app.set ('views' , path.join(__dirname,  "views")) ;

app.use(express.static(path.join(__dirname, "public")));

app.get(' /' , (req , res) => { 
   res.render('home')
})

/*
app.get('/', (req, res) => {
    res.send("<h1>CATECHDIGITAL 2000000</h1>");
});*/

app.listen(port,  ()=>{
    console.log (`Connexion etablie sur le PORT : ${port}`)
})