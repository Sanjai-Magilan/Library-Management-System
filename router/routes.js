const express = require("express");
const router = express.Router();
const controll = require("../controller/control");

router.get("/", controll.GetAll);
router.get("/get/name/:name", controll.GetByName);
router.get("/get/id/:id", controll.GetById);
router.get("/sort/author/:author", controll.SortByAuthor);
router.post("/add", controll.AddBook);
router.delete("/delete/:id", controll.DeleteBook);
router.delete("/delete/name/:name", controll.DeleteByName);
module.exports = router;
