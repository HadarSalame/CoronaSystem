const router=require('express').Router()
const UsersController=require('../Controllers/UserController')

router.post('/CreateUser',UsersController.CreateUser);
router.delete('/DeleteUser/:id',UsersController.DeleteUser);
router.get('/getUser',UsersController.getUser)
router.get('/UpdateName/:name',UsersController.UpdateName)
router.get('/UpdateID/:ID',UsersController.UpdateID)
router.get('/UpdateAddress/:address',UsersController.UpdateAddress)
router.get('/UpdateBirthDate/:birthDate',UsersController.UpdateBirthDate)
router.get('/UpdatePhone/:Phone',UsersController.UpdatePhone)
router.get('/UpdateHandPhone/:handPhone',UsersController.UpdateHandPhone)
router.get('/UpdatePositiveDate/:getPositiveDate',UsersController.UpdatePositiveDate)
router.get('/UpdateRecoveryDate/:recovery',UsersController.UpdateRecoveryDate)
router.get('/UpdatevaccinationType/:vaccinationType',UsersController.UpdatevaccinationType)


module.exports=router