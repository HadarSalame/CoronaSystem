const router=require('express').Router()
const VaccinationController=require('../Controllers/VaccinationController')

router.post('/AddVac',VaccinationController.AddVac);


module.exports=router
