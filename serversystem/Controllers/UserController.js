const UserModel=require('../Models/UserModel');

//Add User
const CreateUser = async (req, res) => {
    let User = req.body
    console.log(User)
    try {

        let CreateUser = await new UserModel(User)
        await CreateUser.save()
        res.json({message:"Added successfully",CreateUser})
    }
    catch (e) {
        res.send(e)
    }

}

//delete

//to check
const DeleteUser = async (req, res) => {

    try {
        const id = req.params.ID;
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
        const Users = await UserModel.find();
        res.send(Users);
    }
    catch (error) {
        next(error);
    }
}

//update

//update name
const UpdateName = (req, res) => {
    let name = req.params.name
    let newName = req.body.name
    UserModel.findOneAndUpdate({ name: name }, { name: newName }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//update name
const UpdateID = (req, res) => {
    let id = req.params.ID
    let newid = req.body.ID
    UserModel.findOneAndUpdate({ ID: id }, { ID: newid }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//update Address
const UpdateAddress = (req, res) => {
    let address = req.params.address
    let newaddress = req.body.address
    UserModel.findOneAndUpdate({ address: address }, { address: newaddress }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//update birth date
const UpdateBirthDate = (req, res) => {
    let bd = req.params.birthDate
    let newbd = req.body.birthDate
    UserModel.findOneAndUpdate({ birthDate: bd }, { birthDate: newbd }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//update phone
const UpdatePhone = (req, res) => {
    let phone = req.params.Phone
    let newphone = req.body.Phone
    UserModel.findOneAndUpdate({ Phone: bd }, { Phone: newbd }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//update hand phone
const UpdateHandPhone = (req, res) => {
    let hp = req.params.handPhone
    let newHp = req.body.handPhone
    UserModel.findOneAndUpdate({ handPhone: hp }, { handPhone: newhp }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}


//update PositiveDate
const UpdatePositiveDate= (req, res) => {
    let getPD = req.params.getPositiveDate
    let newgetPD = req.body.getPositiveDate
    UserModel.findOneAndUpdate({ getPositiveDate: getPD }, { getPositiveDate: newgetPD }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//update recovery date
const UpdateRecoveryDate = (req, res) => {
    let recoverydate = req.params.recovery
    let newrecoverydate = req.body.recovery
    UserModel.findOneAndUpdate({ recovery: recoverydate }, { recovery: newrecoverydate }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//update vaccinationType
const UpdatevaccinationType = (req, res) => {
    let vactype = req.params.vaccinationType
    let newvactype = req.body.vaccinationType
    UserModel.findOneAndUpdate({ vaccinationType: vactype }, { vaccinationType: newvactype }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

// להוסיף שינוי של מערך תאריכים

module.exports={CreateUser,DeleteUser,getUser,UpdateName,UpdateID,UpdateAddress,UpdateBirthDate,UpdatePhone,UpdateHandPhone,UpdatePositiveDate,UpdateRecoveryDate,UpdatevaccinationType}