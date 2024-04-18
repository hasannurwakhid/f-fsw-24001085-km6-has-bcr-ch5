const { transmission, car } = require("../../models");
// const crypto = require("crypto");
// const { uploader } = require("../../helper/cloudinary");
const { getData, setData, deleteData } = require("../../helper/redis");
// const path = require("path");

exports.getTransmissions = async () => {
  const data = await transmission.findAll({
    include: {
      model: car,
    },
  });
  return data;
};

exports.getTransmission = async (id) => {
  const key = `transmissions:${id}`;

  // check redis and if there are any data return data from redis
  let data = await getData(key);
  if (data) {
    return data;
  }

  // if in the redis not found, we will get from database (postgres) and then save it to redis
  data = await transmission.findAll({
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

  throw new Error(`Transmission is not found!`);
};

exports.createTransmission = async (payload) => {
  // Create data to postgres
  const data = await transmission.create(payload);

  // Save to redis (cache)
  const key = `transmissions:${data.id}`;
  await setData(key, data, 300);

  return data;
};

exports.updateTransmission = async (id, payload) => {
  const key = `transmissions:${id}`;

  // update data to postgres
  await transmission.update(payload, {
    where: {
      id,
    },
  });

  // get data from postgres
  const data = await transmission.findAll({
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

  throw new Error(`Transmission is not found!`);
};

exports.deleteTransmission = async (id) => {
  const key = `transmissions:${id}`;

  // delete from postgres
  await transmission.destroy({ where: { id } });

  // delete from redis
  await deleteData(key);

  return null;
};
