const ERROR_MESSAGE = {
  payment: '구입 금액은 1000원 단위 숫자로 입력해야합니다.',
  winNumber: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  winDuplication: '로또 번호는 중복되는 않는 숫자여야 합니다.',
  bonus: '보너스 번호는 1부터 45 사이의 숫자 하나여야 합니다.',
};

const ErrorHandler = {
  catchError(errorType) {
    throw Error('[ERROR] ' + ERROR_MESSAGE[errorType]);
  },
};

module.exports = ErrorHandler;
