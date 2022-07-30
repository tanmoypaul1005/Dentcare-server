const app = require("express");
const { AddUser, UserLogin } = require("../Controller/AuthController");

const router = app.Router();
router.post('/user/add',AddUser);
router.post('/user/login',UserLogin);
module.exports = router;