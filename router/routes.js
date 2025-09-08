const express = require("express");
const router = express.Router();
const controll = require("../controller/control");

router.get("/", controll.GetAll);
router.post("/add", controll.AddBook);
router.delete("/delete/:id", controll.DeleteBook);
router.get("/delete/:name", controll.GetByName);
module.exports = router;
