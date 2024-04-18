const transmissionRepo = require("../../repository/transmission");

exports.getTransmissions = async () => {
  const data = await transmissionRepo.getTransmissions();
  return data;
};

exports.getTransmission = async (id) => {
  const data = await transmissionRepo.getTransmission(id);
  return data;
};

exports.createTransmission = async (payload) => {
  const data = await transmissionRepo.createTransmission(payload);
  return data;
};

exports.updateTransmission = async (id, payload) => {
  // update old data
  await transmissionRepo.updateTransmission(id, payload);

  // find the new data
  const data = await transmissionRepo.getTransmission(id);

  return data;
};

exports.deleteTransmission = async (id) => {
  const data = await transmissionRepo.deleteTransmission(id);
  return data;
};
