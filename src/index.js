const express = require('express')
const app = express()

require('dotenv').config();
const DataBaseconnect = require("./config/DataBase");

const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());

//DataBase Connect
DataBaseconnect()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const AuthRoutes=require("./Route/Auth");
const AppointmentRoutes=require("./Route/Appointment");
const DoctorRoutes=require('./Route/Doctor');
const DentalCheckupRoutes=require('./Route/DentalCheckup');
const CheckupAppointmentRoutes=require('./Route/CheckupAppointment');
app.use('/api',AuthRoutes)
app.use('/api',AppointmentRoutes)
app.use('/api',DoctorRoutes);
app.use('/api',DentalCheckupRoutes);
app.use('/api',CheckupAppointmentRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})