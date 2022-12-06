const ERROR_MESSAGE = {
	payment: '구입 금액은 1000원 단위로만 입력해주세요.',
};

const ErrorHandler = {
	paymentError(errorType) {
		throw Error('[ERROR] ', ERROR_MESSAGE[errorType]);
	},
};
