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

  winNumberValidate(winNumbers) {
    const WIN_NUMBER = new Set(winNumbers);
    if (WIN_NUMBER.size !== 6) {
      ErrorHandler.catchError('winDuplication');
    }
    winNumbers.map((element) => {
      if (isNaN(element)) {
        ErrorHandler.catchError('winNumber');
      }
      const WIN_NUMBER = parseFloat(element);
      if (WIN_NUMBER % 1 > 0 || WIN_NUMBER < 1 || WIN_NUMBER > 45) {
        ErrorHandler.catchError('winNumber');
      }
    });
  },

  bonusValidate(bonus) {
    if (isNaN(bonus)) {
      ErrorHandler.catchError('bonus');
    }
    const BONUS = parseFloat(bonus);
    if (BONUS % 1 > 0 || BONUS < 1 || BONUS > 45) {
      ErrorHandler.catchError('bonus');
    }
  },
};

module.exports = Validator;
