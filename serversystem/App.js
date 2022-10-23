const express = require('express');
const App = express();
const env = require('dotenv');
env.config();
const path = require("path")
const cors =require("cors")

// connect to mongo
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://hadarSalame:hadar9025@coronacluster.cncmrwr.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("connect to mongo")
}).catch(err => { console.log("myerr" + err); })


const bodyParser = require("body-parser")
App.use(bodyParser.json())

App.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// router
const UserRoute = require("./Routers/UserRoute")
App.use('/User', UserRoute)

App.listen(3030, () => {
    console.log('listening on 3030')
}
)