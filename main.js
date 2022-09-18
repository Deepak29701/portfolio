//MY SERVER CODE

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.render("entry");
});
app.get("/home", function(req,res){
    res.render("home");
});
app.get("/thank_you", function(req,res){
    res.render("thank_you");
});
app.listen(process.env.PORT, function(){
    console.log("App Started Successfully!!!");
});