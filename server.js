const express = require("express");
const hbs = require('hbs');
const fs = require('fs');

var app = express();
app.set('view engine','hbs');

hbs.registerPartials(__dirname +'/views/partials');


hbs.registerHelper("currentDate",()=>{
    return new Date().getDate();
});

app.use((req,res,next)=>{
console.log(req.method);
var date = new Date().getFullYear;
var log = `${date}:::${req.method} ${req.url}`;
console.log(log);
    next();
})

app.use((req,res,next)=>{
    res.render("maintenance.hbs");

})
app.use(express.static(__dirname + "/public"));
var user = "Visal Kumar rao";

app.get("/", (req, res) => {
    res.render("home.hbs",{
        title: "Home",
        user: user,
        greetings:"Hey guys wellcome"
    })
    
})
app.get("/me", (req,res) =>{
    res.send({
      user:"BHJDb",
      likes:[
          'biking','cooking'
      ]
  })  
})
app.get("/bad",(req,res) =>{
    res.send({
    errorMessage : "Unable to handel"
     })
})
app.get("/about", (req, res) => {
    res.render('about.hbs',{
        user: user,
        title:"about",  
    })
})
app.get("/software",(req,res)=>{
    res.render('software.hbs',{
        title:"software",
        files:['IDM','Linux Ubntu87.8','Diujy.ljdj']
    })
})

function consolerer(data) {
    console.log(data);
}
app.listen(7878,() =>{
    console.log("dgdhdh");
});