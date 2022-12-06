const InputView = require('./UI/InputView.js');
const Validator = require('./utils/Validator.js');
const Lotto = require('./Lotto.js');
const LottoLibrary = require('./utils/LottoLibrary.js');
const OutputView = require('./UI/OutputView.js');

class App {
  #lottoTotal;
  #lotto;
  #myLottos;

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

    //this.#lotto = new Lotto(this.#lottoTotal);
  }
}

const app = new App();
app.play();

module.exports = App;
