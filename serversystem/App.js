const express = require('express');
const App = express();
const env = require('dotenv');
env.config();

//connect to mongo
// const mongoose = require('mongoose')
// mongoose.connect("mongodb+srv://hadarSalame:<password>@cluster0.i4ivzot.mongodb.net/?retryWrites=true&w=majority").then(() => {
//     console.log("connect to mongo")
// }).catch(err => { console.log("myerr" + err); })

const bodyParser = require("body-parser")
App.use(bodyParser.json())


// router
const UserRoute = require("./Routers/UserRoute")
App.use('/User', UserRoute)

App.listen(3030, () => {
    console.log('listening on 3030')
}
)