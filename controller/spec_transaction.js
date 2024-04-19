const specTransactionUsecase = require("../usecase/spec_transaction");

exports.getSpecTransactions = async (req, res, next) => {
  try {
    const data = await specTransactionUsecase.getSpecTransactions();
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSpecTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await specTransactionUsecase.getSpecTransaction(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.createSpecTransaction = async (req, res, next) => {
  try {
    const { car_id, spec_id } = req.body;
    const createdBy = req.user.id;

    if (!car_id || car_id == "") {
      return next({
        message: "Car ID must be provided",
        statusCode: 400,
      });
    }
    if (!spec_id || spec_id == "") {
      return next({
        message: "Spesification ID must be provided",
        statusCode: 400,
      });
    }

    const data = await specTransactionUsecase.createSpecTransaction({
      car_id,
      spec_id,
      createdBy,
    });

    res.status(201).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateSpecTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { car_id, spec_id } = req.body;
    const updatedBy = req.user.id;

    if (!car_id || car_id == "") {
      return next({
        message: "Car ID must be provided",
        statusCode: 400,
      });
    }
    if (!spec_id || spec_id == "") {
      return next({
        message: "Spesification ID must be provided",
        statusCode: 400,
      });
    }

    const data = await specTransactionUsecase.updateSpecTransaction(id, {
      car_id,
      spec_id,
      updatedBy,
    });

    res.status(201).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSpecTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBy = req.user.id;

    await specTransactionUsecase.updateSpecTransaction(id, {
      deletedBy,
    });

    const data = await specTransactionUsecase.deleteSpecTransaction(id);
    res.status(200).json({
      message: "Succes",
      data,
    });
  } catch (error) {
    next(error);
  }
};
