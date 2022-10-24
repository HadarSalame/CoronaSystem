const {mongoose } = require("mongoose");


const VaccinationSchema=mongoose.Schema({
    //לשלוח את ה_ID של היוזר
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    vaccinationDate:{type:Date,require},
    vaccinationType:{type:String,require},


})
module.exports = mongoose.model("Vaccination", VaccinationSchema)
