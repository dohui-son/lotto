const PROFIT_TABLE = Object.freeze({
  3: 5000,
  4: 50000,
  5: 1500000,
  6: 2000000000,
  7: 30000000,
});

const MESSAGE = Object.freeze({
  INPUT_PAYMENT: '구입금액을 입력해 주세요.\n',
  INPUT_WIN_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS: '\n보너스 번호를 입력해 주세요.\n',

  PURCHASE_DESCRIPTION: (lottoTotal) => `\n${lottoTotal}개를 구매했습니다.`,

  RESULT_TITLE: '\n당첨 통계\n---',
  RESULT_DESCRIPTION: {
    3: '3개 일치 (5,000원) - ',
    4: '4개 일치 (50,000원) - ',
    5: '5개 일치 (1,500,000원) - ',
    7: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    6: '6개 일치 (2,000,000,000원) - ',
  },
  RESULT_PROFIT: (percent) => `총 수익률은 ${percent}입니다.`,
});

module.exports = { PROFIT_TABLE, MESSAGE };
