export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (typeof (array) === 'undefined' || array === null) {
    throw new Error('Flatten undefined or null array');
  }
  if (array.length === 0) {
    return array;
  }
  const newArray = [];
  array.forEach((element) => {
    if (element instanceof Array) {
      newArray.push(...element);
    } else {
      newArray.push(element);
    }
  });
  return newArray;
}
