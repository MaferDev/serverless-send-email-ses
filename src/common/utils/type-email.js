const { EMAIL_TYPES } = require("../const/email-type");

const GetTypeEmailByKey = (key) => {
  const emailType = EMAIL_TYPES.find(
    (e) => e.key.toLowerCase() === key.toLowerCase()
  );

  if (!emailType) throw new Error("Tipo de Email desconocido key= " + key);

  return emailType;
};

module.exports = { GetTypeEmailByKey };
