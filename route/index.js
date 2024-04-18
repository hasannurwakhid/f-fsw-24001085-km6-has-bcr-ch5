const express = require("express");
const router = express.Router();
const car = require("./car");
const transmission = require("./transmission");
const type = require("./type");
const manufacture = require("./manufacture");
const option = require("./option");
const optionTransaction = require("./option_transaction");
const spec = require("./spec");
const specTransaction = require("./spec_transaction");
const authUser = require("./authUser");
const authAdmin = require("./authAdmin");
const authSuperAdmin = require("./authSuperAdmin");



// const dashboardListCar = require("./dashboardListCar");
// const addNewCar = require("./addNewCar");

router.use("/authUser", authUser);
router.use("/authAdmin", authAdmin);
router.use("/authSuperAdmin", authSuperAdmin);


router.use("/cars", car);
router.use("/transmissions", transmission);
router.use("/types", type);
router.use("/manufactures", manufacture);
router.use("/options", option);
router.use("/option-transactions", optionTransaction);
router.use("/specs", spec);
router.use("/spec-transactions", specTransaction);

// router.use("/list-cars", dashboardListCar);
// router.use("/addNewCar", addNewCar);

module.exports = router;
