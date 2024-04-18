const optionTransactionRepo = require("../../repository/option_transaction");

exports.getOptionTransactions = async () => {
  const data = await optionTransactionRepo.getOptionTransactions();
  return data;
};

exports.getOptionTransaction = async (id) => {
  const data = await optionTransactionRepo.getOptionTransaction(id);
  return data;
};

exports.createOptionTransaction = async (payload) => {
  const data = await optionTransactionRepo.createOptionTransaction(payload);
  return data;
};

exports.updateOptionTransaction = async (id, payload) => {
  // update old data
  await optionTransactionRepo.updateOptionTransaction(id, payload);

  // find the new data
  const data = await optionTransactionRepo.getOptionTransaction(id);

  return data;
};

exports.deleteOptionTransaction = async (id) => {
  const data = await optionTransactionRepo.deleteOptionTransaction(id);
  return data;
};
