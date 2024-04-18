const express = require("express");
const router = express.Router();
const dashboardListCarController = require("../controller/dashboardListCar");

router.route("/").get(dashboardListCarController.addCar).post(dashboardListCarController.createCar);

module.exports = router;
