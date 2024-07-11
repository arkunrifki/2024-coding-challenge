/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  const toBe = (val2) => {
    if (val === val2) {
      return true;
    } else {
      return "Not Equal";
    }
  };

  const notToBe = (val2) => (val !== val2 ? true : false);

  return { toBe, notToBe };
};

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));
