const { GetTypeEmailByKey } = require("./src/common/utils/type-email");
const { Email } = require("./src/model/email");
const { getObjectTextS3 } = require("./src/services/s3/getObject.service");
const { SendMailSesService } = require("./src/services/ses/sendMail.service");

/**
 *
 * @param {
 *  type: string,
 *  destination: string,
 *  params:{}
 * } event
 * @returns
 */
const sendMail = async (event) => {
  try {
    console.log("event \n", event);

    // Obtener tipo de email
    const typeEmail = GetTypeEmailByKey(event.type);

    // Obtener template de email del s3
    const keyS3 = `${process.env.BUCKET_PATH_NOTIFICATION}${typeEmail.templateName}.txt`;
    const htmlTemplate = await getObjectTextS3(keyS3);

    const newEmail = new Email(event.destination, typeEmail);
    newEmail.setBody(htmlTemplate, event.params);

    // Send Mail cotization
    await new SendMailSesService().sendMailHTML(newEmail.getEmail());

    return {
      statusCode: 200,
      body: {
        message: "¡Correo enviado!",
      },
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 401,
      body: {
        message: "Error | " + err.message,
      },
    };
  }
};

exports.sendMail = sendMail;
