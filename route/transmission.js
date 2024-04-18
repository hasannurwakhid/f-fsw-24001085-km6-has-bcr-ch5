const express = require("express");
const router = express.Router();

const transmissionController = require("../controller/transmission");
const { authMiddleware } = require("../middleware/auth");

router
  .route("/")
  .get(
    authMiddleware(["admin", "superadmin"]),
    transmissionController.getTransmissions
  )
  .post(
    authMiddleware(["admin", "superadmin"]),
    transmissionController.createTransmission
  );

router
  .route("/:id")
  .get(
    authMiddleware(["admin", "superadmin"]),
    transmissionController.getTransmission
  )
  .put(
    authMiddleware(["admin", "superadmin"]),
    transmissionController.updateTransmission
  )
  .delete(
    authMiddleware(["admin", "superadmin"]),
    transmissionController.deleteTransmission
  );

module.exports = router;
