const optionTransactionUsecase = require("../usecase/option_transaction");

exports.getOptionTransactions = async (req, res, next) => {
  try {
    const data = await optionTransactionUsecase.getOptionTransactions();
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getOptionTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await optionTransactionUsecase.getOptionTransaction(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.createOptionTransaction = async (req, res, next) => {
  try {
    const { car_id, option_id } = req.body;
    if (!car_id || car_id == "") {
      return next({
        message: "Car ID must be provided",
        statusCode: 400,
      });
    }
    if (!option_id || option_id == "") {
      return next({
        message: "Option ID must be provided",
        statusCode: 400,
      });
    }

    const data = await optionTransactionUsecase.createOptionTransaction({
      car_id,
      option_id,
    });

    res.status(201).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateOptionTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { car_id, option_id } = req.body;
    if (!car_id || car_id == "") {
      return next({
        message: "Car ID must be provided",
        statusCode: 400,
      });
    }
    if (!option_id || option_id == "") {
      return next({
        message: "Option ID must be provided",
        statusCode: 400,
      });
    }

    const data = await optionTransactionUsecase.updateOptionTransaction(id, {
      car_id,
      option_id,
    });

    res.status(201).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteOptionTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await optionTransactionUsecase.deleteOptionTransaction(id);
    res.status(200).json({
      message: "Succes",
      data,
    });
  } catch (error) {
    next(error);
  }
};
