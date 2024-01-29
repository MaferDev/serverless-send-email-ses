const ValidateDestinations = (destinations) => {
  const destinationsEmail = {
    to: null,
    cc: null,
    bcc: null,
  };

  if (typeof destinations === "object") {
    if (destinations.to) {
      destinationsEmail.to = ValidateValueDestination(destinations.to);
    } else {
      throw Error("Destinario es requerido");
    }

    if (destinations.cc) {
      destinationsEmail.cc = ValidateValueDestination(destinations.cc);
    }

    if (destinations.bcc) {
      destinationsEmail.bcc = ValidateValueDestination(destinations.bcc);
    }
  } else {
    destinationsEmail.to = [destinations];
  }
  return destinationsEmail;
};

const ValidateValueDestination = (destination) => {
  let destinationList = [];
  if (destination instanceof Array) {
    destinationList = destination;
  } else {
    destinationList = [destination];
  }
  return destinationList;
};

const ValidateTypeEmail = (type) => {};

module.exports = {
  ValidateDestinations,
  ValidateTypeEmail,
};
