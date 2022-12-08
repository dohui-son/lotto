const InputView = require('./UI/InputView.js');
const Validator = require('./utils/Validator.js');
const Lotto = require('./Lotto.js');
const LottoLibrary = require('./utils/LottoLibrary.js');
const OutputView = require('./UI/OutputView.js');
const { PROFIT_TABLE } = require('./utils/constants.js');

class App {
  #lottoTotal;
  #lotto;
  #myLottos;
  #bonus;

  play() {
    this.payLotto();
  }

  payLotto() {
    InputView.readPayment((payment) => {
      const PAYMENT = Validator.paymentValidate(payment);
      this.#lottoTotal = PAYMENT / 1000;
      return this.issueLotto();
    });
  }

  issueLotto() {
    this.#myLottos = LottoLibrary.generateLotto(this.#lottoTotal);
    this.#myLottos = LottoLibrary.sortLotto(this.#myLottos);
    OutputView.printMyLotto(this.#lottoTotal, this.#myLottos);
    return this.createWinLotto();
  }

  createWinLotto() {
    InputView.readWinLotto((winNumbers) => {
      const WIN_NUMBERS = winNumbers.split(',');
      this.#lotto = new Lotto(WIN_NUMBERS);
      return this.createBonusNumber();
    });
  }

  createBonusNumber() {
    InputView.readBonus((bonusNumber) => {
      Validator.bonusValidate(bonusNumber);
      const BONUS = parseInt(bonusNumber);
      this.#lotto.bonusDuplicate(BONUS);
      this.#bonus = BONUS;
      return this.calculateResult();
    });
  }

  calculateResult() {
    const WINNINGS = this.#lotto.calculateScore(this.#bonus, this.#myLottos);
    let profit = 0;
    for (let index = 3; index < 8; index++) {
      profit += PROFIT_TABLE[index] * WINNINGS[index];
    }
    const PROFIT_PERCENTAGE = Math.round((profit / (this.#lottoTotal * 1000)) * 1000) / 10; //수익률 계산해주기
    OutputView.printResult(WINNINGS, PROFIT_PERCENTAGE);
    OutputView.closeConsole();
  }
}

const app = new App();
app.play();

module.exports = App;
