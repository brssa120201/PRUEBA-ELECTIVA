const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = process.env.PORT||3000
const uri=`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@electiva1.mtunbw2.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

mongoose.connect(uri)
.then(console.log('data base connected'))
.catch((error)=>console.log(error))
app.listen(port, ()=>{console.log('Connect with the port', port)})

