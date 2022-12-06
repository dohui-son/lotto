const ErrorHandler = require('./ErrorHandler.js');

const Validator = {
  paymentValidate(payment) {
    if (isNaN(payment)) {
      ErrorHandler.catchError('payment');
    }
    const PAYMENT = parseFloat(payment);
    if (PAYMENT % 1000 > 0) {
      ErrorHandler.catchError('payment');
    }
    return PAYMENT;
  },
};

module.exports = Validator;
