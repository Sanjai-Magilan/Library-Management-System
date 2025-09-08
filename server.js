const express = require("express");
const app = express();
const ConnectDb = require("./database/db");
ConnectDb();
const router = require("./router/routes");
PORT = 3000;
app.use(express.json());
app.use("/Lib", router);
app.listen(PORT, () => console.log(`server started at port ${PORT}`));
