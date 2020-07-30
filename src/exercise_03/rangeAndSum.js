export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const array = [];
  if (start >= 0 && end >= 0) {
    // eslint-disable-next-line no-plusplus
    for (let i = start; i < end; i++) {
      array.push(i);
    }
    return array;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = start; i > end; i--) {
    array.push(i);
  }
  return array;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (numbers === 0 || typeof (numbers) === 'undefined') {
    return 0;
  }
  // eslint-disable-next-line no-plusplus
  let sumNumber = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numbers.length; i++) {
    sumNumber += numbers[i];
  }
  return sumNumber;
}
