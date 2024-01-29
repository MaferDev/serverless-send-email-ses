const AWS = require("aws-sdk");
const s3 = new AWS.S3({ region: process.env.REGION });

/**
 * Permite obtener un objeto de texto almacenado en un bucket de S3
 * @param {string} objectKey
 * @returns {string} Retorna el texto del objeto de s3
 */
const getObjectTextS3 = async (objectKey) => {
  const params = {
    Key: objectKey,
    Bucket: process.env.BUCKET_NAME,
  };

  console.log("getObject");
  console.log(params);

  try {
    const data = await s3.getObject(params).promise();
    const text = data.Body.toString("utf-8");
    return text;
  } catch (error) {
    console.error(
      `Error getting object ${objectKey} from bucket ${params.Bucket}. ${error}`
    );
    throw error;
  }
};

module.exports = { getObjectTextS3 };
