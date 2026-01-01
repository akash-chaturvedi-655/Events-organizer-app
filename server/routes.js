const express=require("express");
const app=express();
const cors=require("cors");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const mongodb=require("mongodb");

var router=express.Router();

router.use(cors());
router.use(bodyParser.urlencoded({extended:true}));

/*
app.use(express.static("client/public")); 
app.use(express.static("client/public/images")); 
*/
router.use(express.static('client/public'));

router.post("/search",function(req,res,next)
{
    console.log("Data was posted via post !!"+JSON.stringify(req.body));
    res.json("Hello from the Post method !")
})

router.get("/search",function(req,res,next)
{
    console.log("Get request was sent : !"+JSON.stringify(req.body));
    res.json("Hello from the Get method !")
})

module.exports=router;