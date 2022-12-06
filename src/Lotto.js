const Validator = require('./utils/Validator.js');
const LottoLibrary = require('./utils/LottoLibrary.js');

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

  calculateScore() {
    //console.log(this.#numbers);
  }
}

module.exports = Lotto;
