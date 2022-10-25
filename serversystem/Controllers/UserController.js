const UserModel=require('../Models/UserModel');
const VaccinationModel = require('../Models/VaccinationModel');

// VaccinationController.AddVac
//Add User
const CreateUser = async (req, res) => {
    let user = req.body
    console.log(user);

    
    try {
      
        let newUser = await new UserModel(user)
        console.log(newUser +"newuser");
        await newUser.save()
        const idVac= newUser.vaccination;
        const userVac = await VaccinationModel.findOne({ _id: idVac });
        userVac.user.push(newUser)
        const updated = await VaccinationModel.findByIdAndUpdate(idVac, userVac, { new: true });
        res.send(updated)


        res.json({message:"Added successfully",user})
    }
    catch (e) {
        res.send(e)
    }

}

//delete

//to check
const DeleteUser = async (req, res) => {

    try {
        const id = req.params._id;
        const User = await UserModel.findOneAndDelete(id);
        res.send(User);
    }
    catch (error) {
        console.log(error);
    }
}

//all the Users
const getUser = async function (req, res, next) {
    
    try {
        const Users = await UserModel.find().populate({
            path : 'vaccination'
          });
        res.send(Users);
    }
    catch (error) {
        next(error);
    }
}

//get user by id
const getUserByID = async function (req, res, next) {
    try {
        const id = req.params.userId;
        const user = await UserModel.findOne({ userId: id });
        console.log(user);
        res.send(user);
    }
    catch (error) {
        next(error);
    }
}

//update

const UpdateUser = (req, res) => {
    let newUser = req.body
    const user = UserModel.findOne({ userId: newUser.userId });
    const updated =  VaccinationModel.findByIdAndUpdate(newUser, user, { new: true });
    res.send(updated)

   .catch((error) => {
        res.send('error :' + error)
    })
}




module.exports={CreateUser,DeleteUser,getUser,UpdateUser,getUserByID}