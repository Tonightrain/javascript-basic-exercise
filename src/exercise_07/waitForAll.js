export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.

  for (let i = 0; i < promises.length; i += 1) {
    if (!(promises[i] instanceof Promise)) {
      throw new Error('Not all elements are promises.');
    }
  }
  return Promise.all(promises.map(p => p.catch(() => fail('It should not be a success promise')))).then();
}
