const { ValidateDestinations } = require("../common/utils/validations");

class Email {
  #destination;
  #body;
  #subject;
  #typeEmail;

  constructor(destination, typeEmail) {
    this.#destination = ValidateDestinations(destination);
    this.#subject = typeEmail.subject;
    this.#typeEmail = typeEmail;
  }

  setSubject(subject) {
    this.#subject = subject;
  }

  setBody(template, params) {
    const html = this.#typeEmail.generateBody(template, params);
    console.log(html);
    this.#body = { html };
  }

  getEmail() {
    return {
      destination: this.#destination,
      body: this.#body,
      subject: this.#subject,
    };
  }
}

module.exports = { Email };
