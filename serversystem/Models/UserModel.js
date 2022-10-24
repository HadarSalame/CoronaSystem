const {mongoose} = require("mongoose");


const UserSchema=mongoose.Schema({
    name:{type:String,require},
    userId:{type:String,require},
    address:{type:String,require},
    birthDate:{type:Date,require},
    Phone:{type:String,require},
    mobilePhone:{type:String,require},
    getPositiveDate:{type:Date,require},
    recovery:{type:Date,require},
    vaccination:[{type:mongoose.Schema.Types.ObjectId,ref:'Vaccination',}]
})

module.exports=mongoose.model("User",UserSchema)