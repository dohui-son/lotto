const MissionUtils = require('@woowacourse/mission-utils');

const LottoLibrary = {
  generateLotto(lottoTotal) {
    const LOTTO_NUMBERS = [];
    for (let index = 0; index < lottoTotal; index++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      LOTTO_NUMBERS.push(numbers);
    }
    return LOTTO_NUMBERS;
  },

  sortLotto(lottoNumbers) {
    lottoNumbers.map((element) => {
      element.sort((a, b) => a - b);
    });
    return lottoNumbers;
  },

  lottoFormatter(lottoNumbers) {
    const LOTTO_NUMBERS = lottoNumbers.map((element) => {
      return parseInt(element);
    });

    return LOTTO_NUMBERS;
  },
};

module.exports = LottoLibrary;
