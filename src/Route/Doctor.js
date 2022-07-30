const app = require("express");
const { AddDoctor, GetDoctor } = require("../Controller/DoctorController");

const router = app.Router();
router.post('/doctor/add',AddDoctor);
router.post('/doctor/get',GetDoctor);
module.exports = router;