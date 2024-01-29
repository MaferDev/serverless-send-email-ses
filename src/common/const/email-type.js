const {
  BuildCorporateEmail,
  BuildIndividualEmail,
  BuildFinancingEmail,
  BuildConfirmationEmail,
} = require("../../helpers/build-email");

const EMAIL_TYPES = [
  {
    key: "financing",
    name: "COTIZACIÓN DE EVALUACIÓN DE CRÉDITO",
    subject: "COTIZACIÓN: EVALUACIÓN DE CRÉDITO",
    templateName: "template-financing",
    generateBody: BuildFinancingEmail,
  },
  {
    key: "corporate",
    name: "COTIZACIÓN DE PLAN CORPORATIVO",
    subject: "COTIZACIÓN: PLAN CORPORATIVO",
    templateName: "template-corporate",
    generateBody: BuildCorporateEmail,
  },
  {
    key: "individual",
    name: "COTIZACIÓN DE PLAN INDIVIDUAL",
    subject: "COTIZACIÓN: PLAN INDIVIDUAL",
    templateName: "template-individual",
    generateBody: BuildIndividualEmail,
  },
  {
    key: "confirmation",
    subject: "CONFIRMACIÓN DE COTIZACIÓN",
    templateName: "template-confirmation",
    generateBody: BuildConfirmationEmail,
  },
];

module.exports = { EMAIL_TYPES };
