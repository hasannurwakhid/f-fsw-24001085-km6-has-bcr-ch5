const express = require("express");
const router = express.Router();
const dashboardListCarController = require("../controller/dashboardListCar");

router.route("/").get(dashboardListCarController.tampilHalaman);
router.route("/:id").post(dashboardListCarController.deleteCar);

module.exports = router;
