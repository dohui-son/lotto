const InputView = require('./UI/InputView.js');
const Validator = require('./utils/Validator.js');

class App {
  #lottoTotal;

  play() {
    this.payLotto();
  }

  payLotto() {
    InputView.readPayment((payment) => {
      const PAYMENT = Validator.paymentValidate(payment);
      this.#lottoTotal = PAYMENT / 1000;
    });
  }
}

const app = new App();
app.play();

module.exports = App;
