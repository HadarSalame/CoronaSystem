const router=require('express').Router()
const VaccinationController=require('../Controllers/VaccinationController')

router.post('/AddVac',VaccinationController.AddVac);
router.get('/GetVacById/:userId',VaccinationController.GetVacById);



module.exports=router
