/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import { version } from 'acorn';

export default function formatNumber(number, option) {
  // This function will format the number to a fixed number string. The decimal part should 2.
  // That means the number 2 will be formatted as '2.00'. The `option` is an object which contains
  // a `currency` property. If the property is `true`, a dollar sign will be added to the result.
  //
  // Your target:
  //
  // * Please implement the function and pass all the tests in format_number_spec.js.
  // * Please do NOT modify the signature of the function.

  let numLen; let dotPos;
  let resultNumber; let n;
  // eslint-disable-next-line no-param-reassign
  number = `${number}`;
  numLen = number.length;
  dotPos = number.indexOf('.', 0);

  if (dotPos === -1) {
    resultNumber = `${number}.`;
    for (let i = 0; i < 2; i++) {
      resultNumber += '0';
    }

    if (option != null) {
      if (option.currency === true) {
        resultNumber = `$ ${resultNumber}`;
      }
    }

    return resultNumber;
  }
  if ((numLen - dotPos - 1) >= 2) {
    n = 1;
    for (let j = 0; j < 2; j++) {
      n *= 10;
    }
    resultNumber = Math.round(parseFloat(number) * n) / n;
    resultNumber = `${resultNumber}`;

    if (option != null) {
      if (option.currency === true) {
        resultNumber = `$ ${resultNumber}`;
      }
    }

    return resultNumber;
  }
  resultNumber = number;
  for (let i = 0; i < (2 - numLen + dotPos + 1); i++) {
    resultNumber += '0';
  }

  if (option != null) {
    if (option.currency === true) {
      resultNumber = `$ ${resultNumber}`;
    }
  }

  return resultNumber;
}
