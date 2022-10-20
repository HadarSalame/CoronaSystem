const {mongoose } = require("mongoose");


const UserSchema=mongoose.Schema({
    name:{type:String,require},
    ID:{type:String,require},
    address:{type:String,require},
    birthDate:{type:Date,require},
    Phone:{type:String,require},
    handPhone:{type:String,require},
    getPositiveDate:{type:Date,require},
    recovery:{type:Date,require},
    vaccinationType:{type:String,require},
    vaccinationDates:[{type:Date,require}]

})

module.exports=mongoose.model("User",UserSchema)