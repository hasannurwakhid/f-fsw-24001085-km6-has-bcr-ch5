const { option_transaction, option, car } = require("../../models");
// const crypto = require("crypto");
// const { uploader } = require("../../helper/cloudinary");
const { getData, setData, deleteData } = require("../../helper/redis");
// const path = require("path");

exports.getOptionTransactions = async () => {
  const data = await option_transaction.findAll({
    include: [
      {
        model: car,
      },
      {
        model: option,
      },
    ],
  });
  return data;
};

exports.getOptionTransaction = async (id) => {
  const key = `optionTransactions:${id}`;

  // check redis and if there are any data return data from redis
  let data = await getData(key);
  if (data) {
    return data;
  }

  // if in the redis not found, we will get from database (postgres) and then save it to redis
  data = await option_transaction.findAll({
    where: {
      id,
    },
    include: [
      {
        model: car,
      },
      {
        model: option,
      },
    ],
  });
  if (data.length > 0) {
    // save in the redis if in the postgres is found
    await setData(key, data[0], 300);

    return data[0];
  }

  throw new Error(`Option Transaction is not found!`);
};

exports.createOptionTransaction = async (payload) => {
  // Create data to postgres
  const data = await option_transaction.create(payload);

  // Save to redis (cache)
  const key = `optionTransactions:${data.id}`;
  await setData(key, data, 300);

  return data;
};

exports.updateOptionTransaction = async (id, payload) => {
  const key = `optionTransactions:${id}`;

  // update data to postgres
  await option_transaction.update(payload, {
    where: {
      id,
    },
  });

  // get data from postgres
  const data = await option_transaction.findAll({
    where: {
      id,
    },
    include: [
      {
        model: car,
      },
      {
        model: option,
      },
    ],
  });
  if (data.length > 0) {
    // save to redis (cache)
    await setData(key, data[0], 300);

    return data[0];
  }

  throw new Error(`Option Transaction is not found!`);
};

exports.deleteOptionTransaction = async (id) => {
  const key = `optionTransactions:${id}`;

  // delete from postgres
  await option_transaction.destroy({ where: { id } });

  // delete from redis
  await deleteData(key);

  return null;
};
