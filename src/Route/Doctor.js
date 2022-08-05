const app = require("express");
const { AddDoctor, GetDoctor,getDoctorProfile } = require("../Controller/DoctorController");

const router = app.Router();
router.post('/doctor/add',AddDoctor);
router.post('/doctor/get',GetDoctor);
router.post('/doctor/:id',getDoctorProfile)
module.exports = router;