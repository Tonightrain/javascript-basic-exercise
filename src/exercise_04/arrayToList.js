/* eslint-disable no-plusplus */
export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (typeof (array) === 'undefined') {
    throw new Error('Creating list from undefined array');
  }
  if (array === null) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }
  let node;
  const list = {
    value: array[0],
    next: null,
  };
  let pnode = list;
  for (let i = 1; i < array.length; i++) {
    node = {
      value: array[i],
      next: null,
    };
    pnode.next = node;
    pnode = node;
  }
  return list;
}
