const { spec_transaction, spec, car } = require("../../models");
// const crypto = require("crypto");
// const { uploader } = require("../../helper/cloudinary");
const { getData, setData, deleteData } = require("../../helper/redis");
// const path = require("path");

exports.getSpecTransactions = async () => {
  const data = await spec_transaction.findAll({
    include: [
      {
        model: car,
      },
      {
        model: spec,
      },
    ],
  });
  return data;
};

exports.getSpecTransaction = async (id) => {
  const key = `specTransactions:${id}`;

  // check redis and if there are any data return data from redis
  let data = await getData(key);
  if (data) {
    return data;
  }

  // if in the redis not found, we will get from database (postgres) and then save it to redis
  data = await spec_transaction.findAll({
    where: {
      id,
    },
    include: [
      {
        model: car,
      },
      {
        model: spec,
      },
    ],
  });
  if (data.length > 0) {
    // save in the redis if in the postgres is found
    await setData(key, data[0], 300);

    return data[0];
  }

  throw new Error(`Spesification Transaction is not found!`);
};

exports.createSpecTransaction = async (payload) => {
  // Create data to postgres
  const data = await spec_transaction.create(payload);

  // Save to redis (cache)
  const key = `specTransactions:${data.id}`;
  await setData(key, data, 300);

  return data;
};

exports.updateSpecTransaction = async (id, payload) => {
  const key = `specTransactions:${id}`;

  // update data to postgres
  await spec_transaction.update(payload, {
    where: {
      id,
    },
  });

  // get data from postgres
  const data = await spec_transaction.findAll({
    where: {
      id,
    },
    include: [
      {
        model: car,
      },
      {
        model: spec,
      },
    ],
  });
  if (data.length > 0) {
    // save to redis (cache)
    await setData(key, data[0], 300);

    return data[0];
  }

  throw new Error(`Spesification Transaction is not found!`);
};

exports.deleteOptionTransaction = async (id) => {
  const key = `specTransactions:${id}`;

  // delete from postgres
  await spec_transaction.destroy({ where: { id } });

  // delete from redis
  await deleteData(key);

  return null;
};
