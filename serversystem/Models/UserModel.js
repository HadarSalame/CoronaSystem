const {mongoose } = require("mongoose");


const UserSchema=mongoose.Schema({
    name:{type:String,require},
    ID:{type:String,require},
    address:{type:String,require},
    birthDate:{type:Date,require},
    Phone:{type:String,require},
    mobilePhone:{type:String,require},
    getPositiveDate:{type:Date,require},
    recovery:{type:Date,require},
    vaccinationType:{type:String,require},
    vaccinationDateOne:{type:Date,require},
    vaccinationDateTwo:{type:Date,require},
    vaccinationDateThree:{type:Date,require},
    vaccinationDateFour:{type:Date,require}




})

module.exports=mongoose.model("User",UserSchema)