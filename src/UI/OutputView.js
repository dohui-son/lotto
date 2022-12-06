const { Console } = require('@woowacourse/mission-utils');
const LottoLibrary = require('../utils/LottoLibrary.js');

const { MESSAGE } = require('../constants.js');

const OutputView = {
  printMyLotto(lottoTotal, myLottos) {
    Console.print(MESSAGE.PURCHASE_DESCRIPTION(lottoTotal));

    myLottos.map((element) => {
      const FORMATED_LOTTOS = '[' + element.join(', ') + ']';
      Console.print(FORMATED_LOTTOS);
    });
  },

  printResult(winResult, profitPercentage) {
    Console.print(MESSAGE.RESULT_TITLE);

    for (let index = 3; index < 7; index++) {
      Console.print(MESSAGE.RESULT_DESCRIPTION[index] + `${winResult[index]}개`);
      if (index === 5) {
        Console.print(MESSAGE.RESULT_DESCRIPTION[7] + `${winResult[7]}개`);
      }
    }
    const PERCENT = LottoLibrary.percentFormatter(profitPercentage);
    Console.print(MESSAGE.RESULT_PROFIT(PERCENT));
  },

  closeConsole() {
    Console.close();
  },
};

module.exports = OutputView;
