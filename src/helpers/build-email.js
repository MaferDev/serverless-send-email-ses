const { DOCUMENT_TYPE } = require("../common/const/document-type");

const newRow =
  '<tr><td width="180"><div style="font-size: 14px; line-height: 24px; font-family: Arial, Helvetica, sans-serif; text-align: center;">$SEDE$</div></td><td width="180"><div style="font-size: 14px; line-height: 24px; font-family: Arial, Helvetica, sans-serif; text-align: center;">$MARCA$ </div></td><td width="180"><div style="font-size: 14px; line-height: 24px; font-family: Arial, Helvetica, sans-serif; text-align: center;">$MODELO$</div></td></tr>';

const BuildFinancingEmail = (template, params) => {
  const client = params.name + " " + params.lastName;
  const type_document = DOCUMENT_TYPE[params.typeDocument];

  let table_vehicle = params.dataVehicle.map((v) =>
    newRow
      .replaceAll("$SEDE$", v.establishment)
      .replaceAll("$MARCA$", v.trademark)
      .replaceAll("$MODELO$", v.model)
  );

  table_vehicle = table_vehicle.join("");

  const html = template
    .replaceAll("$BASE_URL$", process.env.BASE_URL_IMAGE)
    .replace("$CLIENTE$", client)
    .replace("$TIPO_DOCUMENTO$", type_document)
    .replace("$NUMERO_DOCUMENTO$", params.numberDocument)
    .replace("$EMAIL$", params.email)
    .replace("$TELEFONO$", params.phone)
    .replace("$REGIMEN$", params.regime)
    .replace("$INGRESOS_MENSUALES$", params.monthlyIncome)
    .replace("$CUOTA_INICIAL$", params.initialFee)
    .replace("$MONTO_FINANCIAR$", params.amountFinanced)
    .replace("$TABLE_VEHICLE$", table_vehicle)
    .replaceAll("$EMPRESA_EMAIL$", process.env.EMAIL_COTIZACION);

  return html;
};

const BuildCorporateEmail = (template, params) => {
  const client = params.name + " " + params.lastName;
  const type_document = DOCUMENT_TYPE[params.typeDocument];

  let table_vehicle = params.dataVehicle.map((v) =>
    newRow
      .replace("$SEDE$", v.establishment)
      .replace("$MARCA$", v.trademark)
      .replace("$MODELO$", v.model)
  );

  table_vehicle = table_vehicle.join("");

  const html = template
    .replaceAll("$BASE_URL$", process.env.BASE_URL_IMAGE)
    .replace("$CLIENTE$", client)
    .replace("$TIPO_DOCUMENTO$", type_document)
    .replace("$NUMERO_DOCUMENTO$", params.numberDocument)
    .replace("$RAZON_SOCIAL$", params.companyName)
    .replace("$COMPANY_SECTOR$", params.companySector)
    .replace("$EMAIL$", params.email)
    .replace("$TELEFONO$", params.phone)
    .replace("$DECISION_COMPRA$", params.purchaseDecision)
    .replace("$TABLE_VEHICLE$", table_vehicle)
    .replaceAll("$EMPRESA_EMAIL$", process.env.EMAIL_COTIZACION);

  return html;
};

const BuildIndividualEmail = (template, params) => {
  const client = params.name + " " + params.lastName;
  const type_document = DOCUMENT_TYPE[params.typeDocument];

  let table_vehicle = params.dataVehicle.map((v) =>
    newRow
      .replaceAll("$SEDE$", v.establishment)
      .replaceAll("$MARCA$", v.trademark)
      .replaceAll("$MODELO$", v.model)
  );

  table_vehicle = table_vehicle.join("");

  const html = template
    .replaceAll("$BASE_URL$", process.env.BASE_URL_IMAGE)
    .replace("$CLIENTE$", client)
    .replace("$TIPO_DOCUMENTO$", type_document)
    .replace("$NUMERO_DOCUMENTO$", params.numberDocument)
    .replace("$EMAIL$", params.email)
    .replace("$TELEFONO$", params.phone)
    .replace("$DECISION_COMPRA$", params.purchaseDecision)
    .replace("$VEHICLE_PART_CHANGE$", params.vehiclePartChange)
    .replace("$CON_FINANCIAMIENTO$", params.includeFinancing ? "SI" : "NO")
    .replace("$TABLE_VEHICLE$", table_vehicle)
    .replaceAll("$EMPRESA_EMAIL$", process.env.EMAIL_COTIZACION);

  return html;
};

const BuildConfirmationEmail = (template, params) => {
  const client = params.name + " " + params.lastName;

  let table_vehicle = params.dataVehicle.map((v) =>
    newRow
      .replaceAll("$SEDE$", v.establishment)
      .replaceAll("$MARCA$", v.trademark)
      .replaceAll("$MODELO$", v.model)
  );

  table_vehicle = table_vehicle.join("");

  const html = template
    .replaceAll("$BASE_URL$", process.env.BASE_URL_IMAGE)
    .replace("$CLIENTE$", client)
    .replace("$EMAIL$", params.email)
    .replace("$TELEFONO$", params.phone)
    .replace("$TABLE_VEHICLE$", table_vehicle)
    .replaceAll("$EMPRESA_EMAIL$", process.env.EMAIL_COTIZACION);

  return html;
};

module.exports = {
  BuildCorporateEmail,
  BuildFinancingEmail,
  BuildIndividualEmail,
  BuildConfirmationEmail,
};
