const ErrorHandler = require("./ErrorHandler.js");

const Validator = {
  isPayment(payment) {
    if (payment !== /[1-9]/) {
    }
  },
};

module.exports = Validator;
