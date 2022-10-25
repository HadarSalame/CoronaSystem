const router=require('express').Router()
const UsersController=require('../Controllers/UserController')

router.post('/CreateUser',UsersController.CreateUser);
router.delete('/DeleteUser/:userId',UsersController.DeleteUser);
router.get('/getUser',UsersController.getUser)
router.post('/UpdateUser/:userId',UsersController.UpdateUser)
router.get('/getUserByID/:userId',UsersController.getUserByID)


module.exports=router