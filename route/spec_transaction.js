const express = require("express");
const router = express.Router();

const specTransactionController = require("../controller/spec_transaction");
const { authMiddleware } = require("../middleware/auth");

router
  .route("/")
  .get(
    authMiddleware(["admin", "superadmin"]),
    specTransactionController.getSpecTransactions
  )
  .post(
    authMiddleware(["admin", "superadmin"]),
    specTransactionController.createSpecTransaction
  );

router
  .route("/:id")
  .get(
    authMiddleware(["admin", "superadmin"]),
    specTransactionController.getSpecTransaction
  )
  .put(
    authMiddleware(["admin", "superadmin"]),
    specTransactionController.updateSpecTransaction
  )
  .delete(
    authMiddleware(["admin", "superadmin"]),
    specTransactionController.deleteSpecTransaction
  );

module.exports = router;
