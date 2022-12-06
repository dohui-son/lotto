const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readPayment(func) {
    Console.readLine('구입금액을 입력해 주세요.\n', func);
  },
};

module.exports = InputView;
