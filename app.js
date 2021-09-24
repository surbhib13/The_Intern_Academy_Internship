const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require('path');
const request = require('request');
const https = require('https');
const { Router } = require("express");




const app = express();
const port = process.env.PORT || 8080;


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));




app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"))
    // res.render('pages/index')
});

app.post("/", function (req, res) {
    var find = req.body.search;
    console.log(find);
});

app.get("/c", function (req, res) {
    res.sendFile(path.join(__dirname, "/c++.html"))

});


app.get("/python", function (req, res) {
    res.sendFile(path.join(__dirname, "/python.html"));
    
});

app.get("/data", function (req, res) {
    res.sendFile(path.join(__dirname, "/data.html"));
});

// app.get('/python',function (req,res) {
//     res.redirect("/");
    
// })







app.listen(port);
console.log("Server started at http://localhost:" + port);
