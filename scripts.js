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

/* Check for palindromes */
function palindrome(str) {
  var purified_str;
  purified_str = str.replace(/[\W_]/g, "");
  // Lower case remaining string
  purified_str = purified_str.toLowerCase();
  var purified_reverse_str = purified_str.split("").reverse().join("");
  if (purified_str === purified_reverse_str){
    return true;
  }
  else {
    return false;
  }
}

palindrome("2_A3*3#A2");
