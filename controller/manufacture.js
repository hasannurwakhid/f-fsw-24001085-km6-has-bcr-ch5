const manufactureUsecase = require("../usecase/manufacture");

exports.getManufactures = async (req, res, next) => {
  try {
    const data = await manufactureUsecase.getManufactures();
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getManufacture = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await manufactureUsecase.getManufacture(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.createManufacture = async (req, res, next) => {
  try {
    const { name } = req.body;
    const createdBy = req.user.id;
    if (!name || name == "") {
      return next({
        message: "Name must be provided",
        statusCode: 400,
      });
    }

    const data = await manufactureUsecase.createManufacture({
      name,
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

exports.updateManufacture = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedBy = req.user.id;

    if (!name || name == "") {
      return next({
        message: "Name must be provided",
        statusCode: 400,
      });
    }

    const data = await manufactureUsecase.updateManufacture(id, {
      name,
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

exports.deleteManufacture = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBy = req.user.id;
    await manufactureUsecase.updateManufacture(id, {
      deletedBy,
    });
    const data = await manufactureUsecase.deleteManufacture(id);
    res.status(200).json({
      message: "Succes",
      data,
    });
  } catch (error) {
    next(error);
  }
};
