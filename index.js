const express = require('express')
const app = express();

require('dotenv').config();
const DataBaseconnect = require("./src/config/DataBase");
const port=process.env.PORT
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());

//DataBase Connectd
DataBaseconnect()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
console.log(port)

const AuthRoutes=require("./src/Route/Auth");
const AppointmentRoutes=require("./src/Route/Appointment");
const DoctorRoutes=require('./src/Route/Doctor');
const DentalCheckupRoutes=require('./src/Route/DentalCheckup');
const CheckupAppointmentRoutes=require('./src/Route/CheckupAppointment');
app.use('/api',AuthRoutes)
app.use('/api',AppointmentRoutes)
app.use('/api',DoctorRoutes);
app.use('/api',DentalCheckupRoutes);
app.use('/api',CheckupAppointmentRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})