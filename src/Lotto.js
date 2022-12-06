const Validator = require('./utils/Validator.js');
const LottoLibrary = require('./utils/LottoLibrary');

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
}

module.exports = Lotto;
