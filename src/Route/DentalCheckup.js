const app = require("express");
const { AddDentalCheckup,GetDentalCheckup,DeleteDentalCheckup } = require("../Controller/DentalCheckupController");

const router = app.Router();
router.post('/dentalcheckup/add',AddDentalCheckup);
router.post('/dentalcheckup/get',GetDentalCheckup);
router.post('/dentalcheckup/delete',DeleteDentalCheckup);
module.exports = router;