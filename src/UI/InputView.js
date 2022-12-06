const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readPayment(callback) {
    Console.readLine('구입금액을 입력해 주세요.\n', callback);
  },

  readWinLotto(callback) {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', callback);
  },

  readBonus(callback) {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', callback);
  },
};

module.exports = InputView;
