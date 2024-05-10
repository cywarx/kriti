const express = require('express');
const app = express();
const port = 3000;

app.get("/", function(req, res){
    // console.log(req);
    // console.log(res);
    res.send("Hello This is Home Page!");
});

app.get("/contact", function(reqq, res){
    res.send("Hey! Cywarx@gmail.com");
});

app.listen(port, function(){
    console.log("Server Started on Port 3000")
});