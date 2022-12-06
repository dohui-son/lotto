const Validator = require('./utils/Validator.js');
const LottoLibrary = require('./utils/LottoLibrary.js');
const OutputView = require('./UI/OutputView.js');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    Validator.winNumberValidate(numbers);
    this.#numbers = LottoLibrary.lottoFormatter(numbers);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현

  bonusDuplicate(bonus) {
    if (this.#numbers.includes(bonus)) {
      throw new Error('[ERROR] 로또 번호와 보너스 번호는 중복되어서는 안됩니다.');
    }
  }

  calculateScore(bonus, myLottos) {
    let winning = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let index = 0; index < myLottos.length; index++) {
      let counter = 0;
      myLottos[index].map((element) => {
        if (this.#numbers.includes(element)) {
          counter += 1;
        }
      });

      if (counter === 5 && myLottos[index].includes(bonus)) {
        winning[7] += 1;
        continue;
      }
      winning[counter] += 1;
    }

    return winning;
  }
}

module.exports = Lotto;
