const VaccinationModel = require('../Models/VaccinationModel');
const UserModel =require('../Models/UserModel')

const AddVac = async (req, res) => {
    let vac = req.body
    console.log(vac)
    try {

        let newVac = await new VaccinationModel(vac)
         newVac.save().then((()=>{
            res.json({message:"Added successfully",newVac});
            res.status(200).send(updated )
        }))
        const userid = newVac.userId;
        // console.log(userid+"vecuserid");
        const id = await UserModel.findOne({_id: vaccination });
        // console.log(id + "id");
        id.vaccination.push(newVac);
        const updated = await UserModel.findByIdAndUpdate(userid,id,{ new: true });
        console.log(update+"updatevac");
        res.send(updated)
        


        res.json({ message: "Added successfully", vac })
    }
    catch (e) {
        res.send(e)
    }

}
module.exports = { AddVac }
