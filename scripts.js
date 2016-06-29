/* Reverse a string */

function reverseString(str) {
  var str_arr = str.split("");
  str_arr.reverse();
  return str_arr.join("");
}

reverseString("hello");

/* Factorialize a Number */

function factorialize(num) {
  var result = 1;
  for (i = 1; i <= num ; i++) {
    result *= i;
  }
  return result;
}

factorialize(5);
