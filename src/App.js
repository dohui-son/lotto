const InputView = require('./UI/InputView.js');

class App {
  play() {
    this.payLotto();
  }

  payLotto() {
    InputView.readPayment((payment) => {});
  }
}

const app = new App();
app.play();

module.exports = App;
