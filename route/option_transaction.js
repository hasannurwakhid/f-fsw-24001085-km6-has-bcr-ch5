const express = require("express");
const router = express.Router();

const optionTransactionController = require("../controller/option_transaction");
const { authMiddleware } = require("../middleware/auth");


router
  .route("/")
  .get(
    authMiddleware(["admin", "superadmin"]),
    optionTransactionController.getOptionTransactions
  )
  .post(
    authMiddleware(["admin", "superadmin"]),
    optionTransactionController.createOptionTransaction
  );

router
  .route("/:id")
  .get(
    authMiddleware(["admin", "superadmin"]),
    optionTransactionController.getOptionTransaction
  )
  .put(
    authMiddleware(["admin", "superadmin"]),
    optionTransactionController.updateOptionTransaction
  )
  .delete(
    authMiddleware(["admin", "superadmin"]),
    optionTransactionController.deleteOptionTransaction
  );

module.exports = router;
