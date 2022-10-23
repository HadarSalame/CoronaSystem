const router=require('express').Router()
const UsersController=require('../Controllers/UserController')

router.post('/CreateUser',UsersController.CreateUser);
router.delete('/DeleteUser/:ID',UsersController.DeleteUser);
router.get('/getUser',UsersController.getUser)
router.get('/UpdateName/:name',UsersController.UpdateName)
router.get('/UpdateID/:ID',UsersController.UpdateID)
router.get('/UpdateAddress/:address',UsersController.UpdateAddress)
router.get('/UpdateBirthDate/:birthDate',UsersController.UpdateBirthDate)
router.get('/UpdatePhone/:Phone',UsersController.UpdatePhone)
router.get('/UpdatemobilePhone/:mobilePhone',UsersController.UpdatemobilePhone)
router.get('/UpdatePositiveDate/:getPositiveDate',UsersController.UpdatePositiveDate)
router.get('/UpdateRecoveryDate/:recovery',UsersController.UpdateRecoveryDate)
router.get('/UpdatevaccinationType/:vaccinationType',UsersController.UpdatevaccinationType)
router.get('/getUserByID/:ID',UsersController.getUserByID)


module.exports=router