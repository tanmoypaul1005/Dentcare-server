const app = require("express");
const { AddDentalCheckup } = require("../Controller/DentalCheckupController");

const router = app.Router();
router.post('/dentalcheckup/add',AddDentalCheckup);
module.exports = router;