const optionUsecase = require("../usecase/option");

exports.getOptions = async (req, res, next) => {
  try {
    const data = await optionUsecase.getOptions();
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getOption = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await optionUsecase.getOption(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.createOption = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name || name == "") {
      return next({
        message: "Name must be provided",
        statusCode: 400,
      });
    }

    const data = await optionUsecase.createOption({
      name,
    });

    res.status(201).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateOption = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name || name == "") {
      return next({
        message: "Name must be provided",
        statusCode: 400,
      });
    }

    const data = await optionUsecase.updateOption(id, {
      name,
    });

    res.status(201).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteOption = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await optionUsecase.deleteOption(id);
    res.status(200).json({
      message: "Succes",
      data,
    });
  } catch (error) {
    next(error);
  }
};
