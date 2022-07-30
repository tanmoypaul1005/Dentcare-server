const express = require('express')
const app = express()
const port = 8000
require('dotenv').config();
const DataBaseconnect = require("./config/DataBase");

const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//DataBase Connect
DataBaseconnect()

const AuthRoutes=require("./Route/Auth");
const AppointmentRoutes=require("./Route/Appointment");
const DoctorRoutes=require('./Route/Doctor');

app.use('/api',AuthRoutes)
app.use('/api',AppointmentRoutes)
app.use('/api',DoctorRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})