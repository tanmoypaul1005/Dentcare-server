const app = require("express");
const { addAppointment ,GetAppointment,AdminAllAppointmentGet,DeleteAppointment,SearchAppointment} = require("../Controller/AppointmentController");

const router = app.Router();
router.post('/appointment/add',addAppointment);
router.post('/appointment/get',GetAppointment);
router.post('/appointment/get/all',AdminAllAppointmentGet);
router.post('/appointment/delete',DeleteAppointment);
router.post('/appointment/search',SearchAppointment);
module.exports = router;