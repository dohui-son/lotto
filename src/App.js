const InputView = require('./UI/InputView.js');
const Validator = require('./utils/Validator.js');
const Lotto = require('./Lotto.js');
const LottoLibrary = require('./utils/LottoLibrary.js');
const OutputView = require('./UI/OutputView.js');

class App {
  #lottoTotal;
  #lotto;
  #myLottos;
  #winLottos;
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

    //this.#lotto = new Lotto(this.#lottoTotal);
  }

  createBonusNumber() {
    InputView.readBonus((bonusNumber) => {
      //
    });
  }
}

const app = new App();
app.play();

module.exports = App;
