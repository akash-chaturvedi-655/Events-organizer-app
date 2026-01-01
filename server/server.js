const express=require("express");
const app=express();
const cors=require("cors");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const mongodb=require("mongodb");
const path = require('path'); 
var search_red=require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('client/public'));

app.get("/",function(req,res)
{
    res.sendFile(path.join(__dirname,"../client/public/index.html"));
    console.log("Home route accessed !");
})

app.post("/search",function(req,res,next)
{
    console.log("Data was posted via post !!"+JSON.stringify(req.body));
    res.json({"body":req.body.searched})
    
})

app.get("/search",function(req,res,next)
{
    console.log("Get request was sent : !"+ JSON.stringify(req.body));
    res.json({"Input" : req.body })
})

// Health check endpoint
app.get("/health",function(req,res)
{
    res.json({status: "Server is running"});
})

const listener = app.listen(5000 , function()
{
    console.log("Your application is listening on port : " +listener.address().port);
})
