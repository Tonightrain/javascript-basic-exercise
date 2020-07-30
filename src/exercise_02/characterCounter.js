import { range } from '../exercise_03/rangeAndSum';

export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.

  if (typeof (prediction) === 'undefined') {
    if (string == null || string.length === 0 || typeof (string) === 'undefined') {
      return 0;
    }
    return string.length;
  }
  // eslint-disable-next-line no-unused-vars
  let num = 0;
  if (typeof (prediction) !== 'undefined') {
    for (let i = 0; i < string.length; i += 1) {
      if (prediction(string[i])) {
        num += 1;
      }
    }
    return num;
  }
}
