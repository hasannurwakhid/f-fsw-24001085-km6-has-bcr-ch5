const specUsecase = require("../usecase/spec");

exports.getSpecs = async (req, res, next) => {
  try {
    const data = await specUsecase.getSpecs();
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSpec = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await specUsecase.getSpec(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.createSpec = async (req, res, next) => {
  try {
    const { name } = req.body;
    const createdBy = req.user.id;

    if (!name || name == "") {
      return next({
        message: "Name must be provided",
        statusCode: 400,
      });
    }

    const data = await specUsecase.createSpec({
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

exports.updateSpec = async (req, res, next) => {
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

    const data = await specUsecase.updateSpec(id, {
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

exports.deleteSpec = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBy = req.user.id;

    await specUsecase.updateSpec(id, {
      deletedBy,
    });

    const data = await specUsecase.deleteSpec(id);
    res.status(200).json({
      message: "Succes",
      data,
    });
  } catch (error) {
    next(error);
  }
};
