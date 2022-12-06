const { Console } = require('@woowacourse/mission-utils');
const RESULT_DESCRIPTION = {
  3: '3개 일치 (5,000원) - ',
  4: '4개 일치 (50,000원) - ',
  5: '5개 일치 (1,500,000원) - ',
  7: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  6: '6개 일치 (2,000,000,000원) - ',
};

const RESULT_TITLE = '\n당첨 통계\n---';

const OutputView = {
  printMyLotto(lottoTotal, myLottos) {
    Console.print(`\n${lottoTotal}개를 구매했습니다.`);
    myLottos.map((element) => {
      const LOTTO_NUMBERS = element.join(', ');
      Console.print('[' + LOTTO_NUMBERS + ']');
    });
  },

  printResult(winResult, profitPercentage) {
    Console.print(RESULT_TITLE);
    for (let index = 3; index < 7; index++) {
      Console.print(RESULT_DESCRIPTION[index] + `${winResult[index]}개`);
      if (index === 5) {
        Console.print(RESULT_DESCRIPTION[7] + `${winResult[7]}개`);
      }
    }
    const PERCENT = this.percentagePrintFormatter(profitPercentage);
    Console.print(`총 수익률은 ${PERCENT}입니다.`);
  },

  percentagePrintFormatter(percent) {
    if (percent === 0) {
      return '0.0%';
    }
    const PERCENT = percent.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    if (PERCENT.includes('.')) {
      return PERCENT + '%';
    }
    return PERCENT + '.0%';
  },

  closeConsole() {
    Console.close();
  },
};

module.exports = OutputView;
