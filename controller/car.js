const carUsecase = require("../usecase/car");

exports.getCars = async (req, res, next) => {
  try {
    const data = await carUsecase.getCars();
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await carUsecase.getCar(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.createCar = async (req, res, next) => {
  try {
    const {
      model,
      rent_day,
      description,
      year,
      capacity,
      transmission_id,
      type_id,
      manufacture_id,
    } = req.body;
    const { image } = req.files;
    if (!model || model == "") {
      return next({
        message: "Model must be provided",
        statusCode: 400,
      });
    }
    if (!rent_day || rent_day == "") {
      return next({
        message: "Rent/day must be provided",
        statusCode: 400,
      });
    }
    if (!description || description == "") {
      return next({
        message: "Description must be provided",
        statusCode: 400,
      });
    }
    if (!year || year == "") {
      return next({
        message: "Year must be provided",
        statusCode: 400,
      });
    }
    if (!capacity || capacity == "") {
      return next({
        message: "Capacity must be provided",
        statusCode: 400,
      });
    }
    if (!transmission_id || transmission_id == "") {
      return next({
        message: "Transmission ID must be provided",
        statusCode: 400,
      });
    }
    if (!type_id || type_id == "") {
      return next({
        message: "Type ID must be provided",
        statusCode: 400,
      });
    }
    if (!manufacture_id || manufacture_id == "") {
      return next({
        message: "Mescription must be provided",
        statusCode: 400,
      });
    }

    const data = await carUsecase.createCar({
      model,
      image,
      rent_day,
      description,
      year,
      capacity,
      transmission_id,
      type_id,
      manufacture_id,
    });

    res.status(201).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      model,
      rent_day,
      description,
      year,
      capacity,
      transmission_id,
      type_id,
      manufacture_id,
    } = req.body;
    const { image } = req.files;

    if (!model || model == "") {
      return next({
        message: "Model must be provided",
        statusCode: 400,
      });
    }
    if (!rent_day || rent_day == "") {
      return next({
        message: "Rent/day must be provided",
        statusCode: 400,
      });
    }
    if (!description || description == "") {
      return next({
        message: "Description must be provided",
        statusCode: 400,
      });
    }
    if (!year || year == "") {
      return next({
        message: "Year must be provided",
        statusCode: 400,
      });
    }
    if (!capacity || capacity == "") {
      return next({
        message: "Capacity must be provided",
        statusCode: 400,
      });
    }
    if (!transmission_id || transmission_id == "") {
      return next({
        message: "Transmission ID must be provided",
        statusCode: 400,
      });
    }
    if (!type_id || type_id == "") {
      return next({
        message: "Type ID must be provided",
        statusCode: 400,
      });
    }
    if (!manufacture_id || manufacture_id == "") {
      return next({
        message: "Mescription must be provided",
        statusCode: 400,
      });
    }

    const data = await carUsecase.updateCar(id, {
      model,
      image,
      rent_day,
      description,
      year,
      capacity,
      transmission_id,
      type_id,
      manufacture_id,
    });

    res.status(201).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await carUsecase.deleteCar(id);
    res.status(200).json({
      message: "Succes",
      data,
    });
  } catch (error) {
    next(error);
  }
};
