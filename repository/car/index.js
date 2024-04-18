const {
  car,
  manufacture,
  transmission,
  type,
  option,
  option_transaction,
  spec,
  spec_transaction,
} = require("../../models");
const crypto = require("crypto");
const { uploader } = require("../../helper/cloudinary");
const { getData, setData, deleteData } = require("../../helper/redis");
const path = require("path");

exports.getCars = async () => {
  const data = await car.findAll({
    include: [
      {
        model: manufacture,
      },
      {
        model: transmission,
      },
      {
        model: type,
      },
      {
        model: option_transaction,
        include: {
          model: option,
        },
      },
      {
        model: spec_transaction,
        include: {
          model: spec,
        },
      },
    ],
  });
  return data;
};

exports.getCar = async (id) => {
  const key = `cars:${id}`;

  // check redis and if there are any data return data from redis
  let data = await getData(key);
  if (data) {
    return data;
  }

  // if in the redis not found, we will get from database (postgres) and then save it to redis
  data = await car.findAll({
    where: {
      id,
    },
    include: [
      {
        model: manufacture,
      },
      {
        model: transmission,
      },
      {
        model: type,
      },
      {
        model: option_transaction,
        include: {
          model: option,
        },
      },
      {
        model: spec_transaction,
        include: {
          model: spec,
        },
      },
    ],
  });
  if (data.length > 0) {
    // save in the redis if in the postgres is found
    await setData(key, data[0], 300);

    return data[0];
  }

  throw new Error(`Car is not found!`);
};

exports.createCar = async (payload) => {
  // const data = await car.create(payload);
  // return data;

  if (payload.image) {
    const { image } = payload;

    image.publicId = crypto.randomBytes(16).toString("hex");

    image.name = `${image.publicId}${path.parse(image.name).ext}`;

    const imageUpload = await uploader(image);
    payload.image = imageUpload.secure_url;
  }

  const data = await car.create(payload);

  const key = `cars:${data.id}`;
  await setData(key, data, 300);

  return data;
};

exports.updateCar = async (id, payload) => {
  const key = `cars:${id}`;

  if (payload.image) {
    // upload image to cloudinary
    const { image } = payload;

    // make unique filename -> 213123128uasod9as8djas
    image.publicId = crypto.randomBytes(16).toString("hex");

    // rename the file -> 213123128uasod9as8djas.jpg / 213123128uasod9as8djas.png
    image.name = `${image.publicId}${path.parse(image.name).ext}`;

    // Process to upload image
    const imageUpload = await uploader(image);
    payload.image = imageUpload.secure_url;
  }

  // update to postgres
  await car.update(payload, {
    where: {
      id,
    },
  });

  // get from postgres
  const data = await car.findAll({
    where: {
      id,
    },
    include: [
      {
        model: manufacture,
      },
      {
        model: transmission,
      },
      {
        model: type,
      },
      {
        model: option_transaction,
        include: {
          model: option,
        },
      },
      {
        model: spec_transaction,
        include: {
          model: spec,
        },
      },
    ],
  });
  if (data.length > 0) {
    // save to redis
    await setData(key, data[0], 300);

    return data[0];
  }

  return data;
};

exports.deleteCar = async (id) => {
  const key = `cars:${id}`;

  // delete from postgres
  await car.destroy({ where: { id } });

  // delete from redis
  await deleteData(key);

  return null;
};
