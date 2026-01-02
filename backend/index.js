const port = 5000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path =require("path")
const cors =require("cors")

app.arguments(express.json())
app.use(cors())

//Database Connection with MongoDB
mongoose.connect("")

//API Creation
app.listen(port,()=>{})

