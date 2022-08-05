const app = require("express");
const { AddCheckupAppointment ,GetCheckupAppointment, AdminAllCheckupAppointmentGet,DeleteCheckupAppointment} = require("../Controller/CheckupAppointmentController");

const router = app.Router();
router.post('/checkup/appointment/add',AddCheckupAppointment);
router.post('/checkup/appointment/get',GetCheckupAppointment);
router.post('/checkup/appointment/all',AdminAllCheckupAppointmentGet);
router.post('/checkup/appointment/delete',DeleteCheckupAppointment);
module.exports = router;