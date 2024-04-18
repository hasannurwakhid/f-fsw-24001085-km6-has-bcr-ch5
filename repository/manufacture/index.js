const { manufacture, car } = require("../../models");
// const crypto = require("crypto");
// const { uploader } = require("../../helper/cloudinary");
const { getData, setData, deleteData } = require("../../helper/redis");
// const path = require("path");

exports.getManufactures = async () => {
  const data = await manufacture.findAll({
    include: {
      model: car,
    },
  });
  return data;
};

exports.getManufacture = async (id) => {
  const key = `manufactures:${id}`;

  // check redis and if there are any data return data from redis
  let data = await getData(key);
  if (data) {
    return data;
  }

  // if in the redis not found, we will get from database (postgres) and then save it to redis
  data = await manufacture.findAll({
    where: {
      id,
    },
    include: {
      model: car,
    },
  });
  if (data.length > 0) {
    // save in the redis if in the postgres is found
    await setData(key, data[0], 300);

    return data[0];
  }

  throw new Error(`Manufacture is not found!`);
};

exports.createManufacture = async (payload) => {
  // Create data to postgres
  const data = await manufacture.create(payload);

  // Save to redis (cache)
  const key = `manufactures:${data.id}`;
  await setData(key, data, 300);

  return data;
};

exports.updateManufacture = async (id, payload) => {
  const key = `manufactures:${id}`;

  // update data to postgres
  await manufacture.update(payload, {
    where: {
      id,
    },
  });

  // get data from postgres
  const data = await manufacture.findAll({
    where: {
      id,
    },
    include: {
      model: car,
    },
  });
  if (data.length > 0) {
    // save to redis (cache)
    await setData(key, data[0], 300);

    return data[0];
  }

  throw new Error(`Manufacture is not found!`);
};

exports.deleteManufacture = async (id) => {
  const key = `manufactures:${id}`;

  // delete from postgres
  await manufacture.destroy({ where: { id } });

  // delete from redis
  await deleteData(key);

  return null;
};
