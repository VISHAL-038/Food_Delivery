const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
const { mongo } = require("mongoose");
mongoDB();
app.get('/',(req,res)=>{
    res.send('Hello World!')
});

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`);
});