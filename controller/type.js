const typeUsecase = require("../usecase/type");

exports.getTypes = async (req, res, next) => {
  try {
    const data = await typeUsecase.getTypes();
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await typeUsecase.getType(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.createType = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name || name == "") {
      return next({
        message: "Name must be provided",
        statusCode: 400,
      });
    }

    const data = await typeUsecase.createType({
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

exports.updateType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name || name == "") {
      return next({
        message: "Name must be provided",
        statusCode: 400,
      });
    }

    const data = await typeUsecase.updateType(id, {
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

exports.deleteType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await typeUsecase.deleteType(id);
    res.status(200).json({
      message: "Succes",
      data,
    });
  } catch (error) {
    next(error);
  }
};
