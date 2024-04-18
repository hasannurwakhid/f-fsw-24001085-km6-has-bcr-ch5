const specTransactionRepo = require("../../repository/spec_transaction");

exports.getSpecTransactions = async () => {
  const data = await specTransactionRepo.getSpecTransactions();
  return data;
};

exports.getSpecTransaction = async (id) => {
  const data = await specTransactionRepo.getSpecTransaction(id);
  return data;
};

exports.createSpecTransaction = async (payload) => {
  const data = await specTransactionRepo.createSpecTransaction(payload);
  return data;
};

exports.updateSpecTransaction = async (id, payload) => {
  // update old data
  await specTransactionRepo.updateSpecTransaction(id, payload);

  // find the new data
  const data = await specTransactionRepo.getSpecTransaction(id);

  return data;
};

exports.deleteSpecTransaction = async (id) => {
  const data = await specTransactionRepo.deleteOptionTransaction(id);
  return data;
};
