const express = require("express");
const router = express.Router();
const controll = require("../controller/control");

router.get("/", controll.GetAll);
module.exports = router;
