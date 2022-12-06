const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constants.js');

const InputView = {
  readPayment(callback) {
    Console.readLine(MESSAGE.INPUT_PAYMENT, callback);
  },

  readWinLotto(callback) {
    Console.readLine(MESSAGE.INPUT_WIN_NUMBER, callback);
  },

  readBonus(callback) {
    Console.readLine(MESSAGE.INPUT_BONUS, callback);
  },
};

module.exports = InputView;
