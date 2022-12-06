const InputView = require('./UI/InputView.js');
const Validator = require('./utils/Validator.js');
const Lotto = require('./Lotto.js');
const LottoLibrary = require('./utils/LottoLibrary.js');

class App {
  #lottoTotal;
  #lotto;
  #winLottos;

  play() {
    this.payLotto();
  }

  payLotto() {
    InputView.readPayment((payment) => {
      const PAYMENT = Validator.paymentValidate(payment);
      this.#lottoTotal = PAYMENT / 1000;
      return this.purchaseLotto();
    });
  }

  purchaseLotto() {
    this.#winLottos = LottoLibrary.generateLotto(this.#lottoTotal);

    //this.#lotto = new Lotto(this.#lottoTotal);
  }
}

const app = new App();
app.play();

module.exports = App;
