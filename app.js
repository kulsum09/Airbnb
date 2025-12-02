const express = require("express");
// const mongoose = require('mongoose');
const app = express();

app.get("/" , (req , res) => {
    res.send("Hi I am the root")
});

app.listen(8080, () =>{
    console.log("server is listening to port 8080");
});