const ERROR_MESSAGE = {
  payment: '구입 금액은 1000원 단위 숫자로 입력해야합니다.',
};

const ErrorHandler = {
  catchError(errorType) {
    throw Error('[ERROR] ' + ERROR_MESSAGE[errorType]);
  },
};

module.exports = ErrorHandler;
