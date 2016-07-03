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

/* Find the Longest Word in a String */

function findLongestWord(str) {
  var result;
  var str_arr = str.split(" ");
  var lengths_arr = str_arr.map(function(e) {
    return e.length;
  });
  return Math.max.apply(null, lengths_arr);
}

findLongestWord("The quick brown fox jumped over the lazy dog");

/* Title Case a Sentence */

function titleCase(str) {
  str_arr = str.split(" ");
  upcase_arr = str_arr.map(function(e) {
    return titlize(e);
  });
  return upcase_arr.join(" ");
}

function titlize(str){
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

titleCase("sHoRt AnD sToUt");

/* Return Largest Numbers in Arrays */

function largestOfFour(arr) {
  var maxArr = arr.map(function(a) {
    return Math.max.apply(null, a);
  });
  return maxArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/* Confirm the Ending */

function confirmEnding(str, target) {
  var strLength = str.length;
  var targetLength = target.length;
  var compareStr = str.substring(strLength - targetLength);
  if (target === compareStr) {
    return true;
  }
  else {
    return false;
  }
}

confirmEnding("He has to give me a new name", "name");

/* Repeat a string */

function repeatStringNumTimes(str, num) {
  var result="";
  for (var i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

repeatStringNumTimes("abc", 3);

/* Truncate a string */

function truncateString(str, num) {
  var strLength = str.length;
  if (strLength > num) {
    var dots = "...";
    var dotsLength = dots.length;
    if (num <= dotsLength){
      return str.slice(0, num) + dots;
    }
    else{
      var sliceVal = num -3;
      return str.slice(0, sliceVal) + dots;
    }
  }
  else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

/* Chunky Monkey */

function chunkArrayInGroups(arr, size) {
  var resultArr = [];
  for (var i = 0; i < arr.length; i+=size) {
    var chunkVal = i + size;
    var chunkArr = arr.slice(i, chunkVal);
    resultArr.push(chunkArr);
  }
  return resultArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

/* Slasher Flick */

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.splice(howMany);
}

slasher([1, 2, 3], 2);

/* Mutations */

function mutation(arr) {
  var compareStr = removeRepeated(arr[1].toLowerCase());
  var strArr = arr[0].toLowerCase().split("");
  var foundArr = [];
  strArr.map(function (val) {
    if (compareStr.indexOf(val) >= 0){
      if (foundArr.indexOf(val) == -1) {
        foundArr.push(val);
      }
    }
  });
  return foundArr.length == compareStr.length;
}

function removeRepeated(str) {
  var result = '';
  for(var i = 0; i < str.length; i++) {
    if(result.indexOf(str[i]) < 0) {
      result += str[i];
    }
  }
  return result;
}

mutation(["hello", "Hello"]);
