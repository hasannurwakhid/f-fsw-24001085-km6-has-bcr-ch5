const express = require("express");
const router = express.Router();

const manufactureController = require("../controller/manufacture");
const { authMiddleware } = require("../middleware/auth");


router
  .route("/")
  .get(
    authMiddleware(["admin", "superadmin"]),
    manufactureController.getManufactures
  )
  .post(
    authMiddleware(["admin", "superadmin"]),
    manufactureController.createManufacture
  );

router
  .route("/:id")
  .get(
    authMiddleware(["admin", "superadmin"]),
    manufactureController.getManufacture
  )
  .put(
    authMiddleware(["admin", "superadmin"]),
    manufactureController.updateManufacture
  )
  .delete(
    authMiddleware(["admin", "superadmin"]),
    manufactureController.deleteManufacture
  );

module.exports = router;
