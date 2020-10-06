const express = require("express");
 const bodyParser = require("body-parser");
 const ejs = require("ejs");
 const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

 app.use(bodyParser.urlencoded({
     extended: true
 }));
 app.use(express.static("public"));

 mongoose.connect("mongodb://localhost:27017/ms_hackers3.0", {useNewUrlParser: true});

 const hackernews = {
     title: String,
     content: string
 };

 const Hacker = mongoose.Model("Hacker", hackernews);

 app.get("/Hackers", function(request, response){
      Hacker.find(function(err, foundHackers){
        console.log(foundHackers);
   });
 });

app.listen(3000, function() {
    console.log("Server started on port 3000");
});