const VaccinationModel = require('../Models/VaccinationModel');
const UserModel =require('../Models/UserModel')

const AddVac = async (req, res) => {
    let vac = req.body
    console.log(vac)
    try {

        let newVac = await new VaccinationModel(vac)
        await newVac.save()
        console.log(newVac+"....///.......")

        const userid = newVac.userId;   
        console.log(userid+"....///../////.....")
        
        const id = await UserModel.findOne({_id: userid });
        console.log(id+"...........")
        id.vaccination.push(newVac);
        const updated = await UserModel.findByIdAndUpdate(userid,id,{ new: true });
        console.log(updated+"updatevac");
        res.send(updated)

        


        res.json({ message: "Added successfully", vac })
    }
    catch (e) {
        res.send(e)
    }

   

}

//get vaccination by userid
const GetVacById = async function (req, res, next) {
    try {
        const uId = req.params;
        const vac = await orderModel.find({ _id: uId })

        console.log(vac);
        res.send(vac);
    }
    catch (error) {
        next(error);
    }
}

module.exports = { AddVac,GetVacById }
