const { type, car } = require("../../models");
// const crypto = require("crypto");
// const { uploader } = require("../../helper/cloudinary");
const { getData, setData, deleteData } = require("../../helper/redis");
// const path = require("path");

exports.getTypes = async () => {
  const data = await type.findAll({
    include: {
      model: car,
    },
  });
  return data;
};

exports.getType = async (id) => {
  const key = `types:${id}`;

  // check redis and if there are any data return data from redis
  let data = await getData(key);
  if (data) {
    return data;
  }

  // if in the redis not found, we will get from database (postgres) and then save it to redis
  data = await type.findAll({
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

  throw new Error(`Type is not found!`);
};

exports.createType = async (payload) => {
  // Create data to postgres
  const data = await type.create(payload);

  // Save to redis (cache)
  const key = `types:${data.id}`;
  await setData(key, data, 300);

  return data;
};

exports.updateType = async (id, payload) => {
  const key = `types:${id}`;

  // update data to postgres
  await type.update(payload, {
    where: {
      id,
    },
  });

  // get data from postgres
  const data = await type.findAll({
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

  throw new Error(`Type is not found!`);
};

exports.deleteType = async (id) => {
  const key = `types:${id}`;

  // delete from postgres
  await type.destroy({ where: { id } });

  // delete from redis
  await deleteData(key);

  return null;
};
