/* eslint-disable */

export const convertToMoney = (num: any, decimal = 0) => {
  if (!num && num !== 0 || num == true) {
    return '';
  }
  if (typeof num === 'string') {

    num = parseInt(num);
  }
  num = num.toFixed(decimal);
  return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
