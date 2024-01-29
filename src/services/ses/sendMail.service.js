const AWS = require("aws-sdk");
const ses = new AWS.SES({ region: process.env.REGION }); // Reemplaza 'us-west-2' con la región en la que deseas enviar el correo electrónico

class SendMailSesService {
  /**
   * Envia un correo electrónico con contenido Html
   * @param {{
   *    destination: {
   *        to: Array<string>,
   *        cc: Array<string>,
   *        bcc: Array<string>
   *    }
   *    body: {
   *        html: string;
   *        chartset?: string;
   *    },
   *    subject: string;
   * }} payload Datos de email
   * @returns {boolean} True = Se envio correctamente / False= Error al enviar
   */
  async sendMailHTML(payload) {
    const Destination = {};

    Destination.ToAddresses = payload.destination.to;

    if (payload.destination.cc) {
      Destination.CcAddresses = payload.destination.cc;
    }

    if (payload.destination.bcc) {
      Destination.BccAddresses = payload.destination.bcc;
    }

    const params = {
      Destination,
      Message: {
        Body: {
          Html: {
            Charset: payload.body.chartset || "UTF-8",
            Data: payload.body.html,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: payload.subject,
        },
      },
      Source: process.env.EMAIL_NOTIFICATION,
    };

    console.log("sendMailHTML", params);

    try {
      const response = await ses.sendEmail(params).promise();
      console.log(response);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = { SendMailSesService };
