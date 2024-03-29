var addStrings = function (num1, num2) {
  let result = "";
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;
    if (i >= 0) {
      sum += parseInt(num1[i]);
      i--;
    }
    if (j >= 0) {
      sum += parseInt(num2[j]);
      j--;
    }
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }
  return result;
};

console.log(addStrings("11", "123"));
