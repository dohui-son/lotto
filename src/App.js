const InputView = require("./View/InputView");

class App {
  #myLottoCount;
  play() {
    this.payLotto();
  }
  payLotto() {
    InputView.readPayment((money) => {
      // money validation
    });
  }
}

const app = new App();
app.play();

module.exports = App;
