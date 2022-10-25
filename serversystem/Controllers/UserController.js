const UserModel=require('../Models/UserModel');
const VaccinationModel = require('../Models/VaccinationModel');

// VaccinationController.AddVac
//Add User
const CreateUser = async (req, res) => {
    let user = req.body
    console.log(user);

    
    try {
        console.log(bid)
        if(bid==undefined||bid==null)
        {
        let newUser = await new UserModel(user)
        console.log(newUser +"newuser");
        await newUser.save()
        const idVac= newUser.vaccination;
        const userVac = await VaccinationModel.findOne({ _id: idVac });
        userVac.userId.push(newUser)
        const updated = await VaccinationModel.findByIdAndUpdate(idVac, userVac, { new: true });
        res.send(updated)
    }
    else{   res.send("the user allredy exist")}

        res.json({message:"Added successfully",user})
    }
    catch (e) {
        res.send(e)
    }

}

//delete


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
        const Users = await UserModel.find().populate("vaccination") // key to populate
        .then(user => {
           res.json(user); 
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
        const id = req.params._id;
        const user = await UserModel.findOne({ _id: id });
        console.log(user);
        res.send(user);
    }
    catch (error) {
        next(error);
    }
}

//update

const UpdateUser = async (req, res) => {
    await UserModel.updateOne({ _id: req.params.userId }, req.body).then((u) => {
        console.log('update user!!', u);
        return res.status(201).json(u)
    }).catch(error => {
        console.error('err update user')
    })

}




module.exports={CreateUser,DeleteUser,getUser,UpdateUser,getUserByID}