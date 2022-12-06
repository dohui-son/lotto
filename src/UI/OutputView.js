const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printMyLotto(lottoTotal, myLottos) {
    Console.print(`\n${lottoTotal}개를 구매했습니다.`);
    myLottos.map((element) => {
      const LOTTO_NUMBERS = element.join(', ');
      Console.print('[' + LOTTO_NUMBERS + ']');
    });
  },
};

module.exports = OutputView;
