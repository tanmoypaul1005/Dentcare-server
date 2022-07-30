const app = require("express");
const { addAppointment ,GetAppointment} = require("../Controller/AppointmentController");

const router = app.Router();
router.post('/appointment/add',addAppointment);
router.post('/appointment/get',GetAppointment);
module.exports = router;