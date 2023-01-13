const express = require('express')
const cowsay = require('cowsay')

const app= express()
const port =3000;

//Template engine
app.set('view engine','pug');
app.set('views','./views');
app.use(express.static('public'));


app.get("/", (req, res) => {
    const name = 'test'
    res.render("index",{name});
  });
  app.get("/about", (req, res) => {
    res.render("aboutme");
  });
  
  app.get("/contact", (req, res) => {
    res.render("contact");
  });
  

app.listen(port, () => {
    console.log(
        cowsay.say({
            text : `Nos vamos a por tortilla (si queda) Example app listening on port http://localhost:${port}`,
            e : "oO",
            T : "U "
        }))
})