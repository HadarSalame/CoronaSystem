const express = require('express');
const App = express();
const env = require('dotenv');
env.config();

// connect to mongo
// const mongoose = require('mongoose')
// mongoose.connect("mongodb+srv://hadarSalame:coronacluster.cncmrwr.mongodb.net/?retryWrites=true&w=majority").then(() => {
//     console.log("connect to mongo")
// }).catch(err => { console.log("myerr" + err); })



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://hadarSalame:hadar9025@coronacluster.cncmrwr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('err '+err);
  // perform actions on the collection object
  client.close();
});

const bodyParser = require("body-parser")
App.use(bodyParser.json())


// router
const UserRoute = require("./Routers/UserRoute")
App.use('/User', UserRoute)

App.listen(3030, () => {
    console.log('listening on 3030')
}
)