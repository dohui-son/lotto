const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  readPayment(func) {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", func);
  },
};

module.exports = InputView;
