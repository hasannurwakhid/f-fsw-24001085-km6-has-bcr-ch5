const transmissionUsecase = require("../usecase/transmission");

exports.getTransmissions = async (req, res, next) => {
  try {
    const data = await transmissionUsecase.getTransmissions();
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getTransmission = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await transmissionUsecase.getTransmission(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.createTransmission = async (req, res, next) => {
  try {
    const { name } = req.body;
    const createdBy = req.user.id;

    if (!name || name == "") {
      return next({
        message: "Name must be provided",
        statusCode: 400,
      });
    }

    const data = await transmissionUsecase.createTransmission({
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

exports.updateTransmission = async (req, res, next) => {
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

    const data = await transmissionUsecase.updateTransmission(id, {
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

exports.deleteTransmission = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBy = req.user.id;

    await transmissionUsecase.updateTransmission(id, {
      deletedBy,
    });

    const data = await transmissionUsecase.deleteTransmission(id);
    res.status(200).json({
      message: "Succes",
      data,
    });
  } catch (error) {
    next(error);
  }
};
