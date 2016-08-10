/* Sum All Numbers in a Range */

function sumAll(arr) {
  var minNum = Math.min(arr[0], arr[1]);
  var maxNum = Math.max(arr[0], arr[1]);
  var sortedArr = [];
  for (var i = minNum; i <= maxNum; i++) {
    sortedArr.push(i);
  }
  var reducedVal = sortedArr.reduce(function(a, b) {
    return a + b;
  }, 0);
  return reducedVal;
}

sumAll([10, 5]);

/* Diff Two Arrays */

function diffArray(arr1, arr2) {
  var diffArr1 = arr1.filter(function (element) {
    if (arr2.indexOf(element) > -1) {
      return false;
    }
    else {
      return true;
    }
  });
  var diffArr2 = arr2.filter(function (element) {
    if (arr1.indexOf(element) > -1) {
      return false;
    }
    else {
      return true;
    }
  });
  return diffArr1.concat(diffArr2);
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/* Roman Numeral Converter */
function convertToRoman(num) {
 var conversionMapping = {
   1: "I",
   4: "IV",
   5: "V",
   9: "IX",
   10: "X",
   40: "XL",
   50: "L",
   90: "XC",
   100: "C",
   400: "CD",
   500: "D",
   900: "CM",
   1000: "M"
 };
 var splittedArr = splitNum(num).map(function(num) {
   return convertSplittedNum(num, conversionMapping);
 });
 return splittedArr.join("");
}

/* Convert single splitted number to Roman */
function convertSplittedNum(num, conversionMapping) {
  var resultStr = "";
  var times, i = 0;
  // Number is zero
  if (num === 0) {
    return resultStr;
  }
  // Number is thousands
  else if (Math.floor(num / 1000) > 0) {
    times = Math.floor(num / 1000);
    for (i; i < times; i++) {
      resultStr += conversionMapping[1000];
    }
  }
  // Number is hundreds
  else if (Math.floor(num / 100) > 0) {
    if (num >= 100 && num < 400) {
      times = Math.floor(num / 100);
      for (i; i < times; i++) {
        resultStr += conversionMapping[100];
      }
    }
    else if (num == 400) {
      resultStr += conversionMapping[400];
    }
    else if (num == 500) {
      resultStr += conversionMapping[500];
    }
    else if (num > 500 && num < 900) {
      resultStr += conversionMapping[500];
      times = Math.floor((num - 500) / 100);
      for (i; i < times; i++) {
        resultStr += conversionMapping[100];
      }
    }
    else if (num == 900) {
      resultStr += conversionMapping[900];
    }
  }
  // Number is tens
  else if (Math.floor(num / 10) > 0) {
    if (num >= 10 && num < 40) {
      times = Math.floor(num / 10);
      for (i; i < times; i++) {
        resultStr += conversionMapping[10];
      }
    }
    else if (num == 40) {
      resultStr += conversionMapping[40];
    }
    else if (num == 50) {
      resultStr += conversionMapping[50];
    }
    else if (num > 50 && num < 90) {
      resultStr += conversionMapping[50];
      times = Math.floor((num - 50) / 10);
      for (i; i < times; i++) {
        resultStr += conversionMapping[10];
      }
    }
    else if (num == 90) {
      resultStr += conversionMapping[90];
    }
  }
  // Number is units
  else if (num >= 1 && num < 4) {
    times = num;
    for (i; i < times; i++) {
      resultStr += conversionMapping[1];
    }
  }
  else if (num == 4) {
    resultStr += conversionMapping[4];
  }
  else if (num == 5) {
    resultStr += conversionMapping[5];
  }
  else if (num > 5 && num < 9) {
    resultStr += conversionMapping[5];
    times = num - 5;
    for (i; i < times; i++) {
      resultStr += conversionMapping[1];
    }
  }
  else if (num == 9) {
    resultStr += conversionMapping[9];
  }
  else {
    return "";
  }
  return resultStr;
}

/* Splits the number in thousands, hundreds
*  tens and units
*/
function splitNum(num) {
  var splitNumArr = [];
  var thousands, preHundreds, hundreds, preTens, tens, units = 0;
  // Number is higher than 1000
  if (Math.floor(num / 1000) > 0) {
    thousands = Math.floor(num / 1000);
    splitNumArr.push(thousands * 1000);
    preHundreds = num % 1000;
    hundreds = Math.floor(preHundreds / 100);
    splitNumArr.push(hundreds * 100);
    preTens = num % 100;
    tens = Math.floor(preTens / 10);
    splitNumArr.push(tens * 10);
    units = num % 10;
    splitNumArr.push(units);
  }
  // Number is higher than 100
  else if (Math.floor(num / 100) > 0) {
    hundreds = Math.floor(num / 100);
    splitNumArr.push(hundreds * 100);
    preTens = num % 100;
    tens = Math.floor(preTens / 10);
    splitNumArr.push(tens * 10);
    units = num % 10;
    splitNumArr.push(units);
  }
  // Number is higher than 10
  else if (Math.floor(num / 10) > 0) {
    tens = Math.floor(num / 10);
    splitNumArr.push(tens * 10);
    units = num % 10;
    splitNumArr.push(units);
  }
  // Number is a single unit
  else {
    splitNumArr.push(num);
  }
  return splitNumArr;
}

convertToRoman(68);

/* Wherefore art thou */

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  collection.forEach(function(obj){
    if (hasProperties(obj, source)) {
      arr.push(obj);
    }
  });
  // Only change code above this line
  return arr;
}

/* Compares objects properties */
function hasProperties(compareObj, sourceObj) {
  var resultArr = [];
  for (var key in sourceObj) {
    if (compareObj.hasOwnProperty(key) && compareObj[key] === sourceObj[key]) {
      resultArr.push(true);
    }
    else {
      resultArr.push(false);
    }
  }
  return resultArr.reduce(function(a, b) {
    return a && b;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

/* Search and Replace */

function myReplace(str, before, after) {
  var upperRe = /^[A-Z]/;
  if (upperRe.test(before)) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  var re =  new RegExp(before, "gi");
  return str.replace(re, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/* Pig Latin */

function translatePigLatin(str) {
  var consSuffix = "ay";
  var vowelSuffix = "way";
  // First letter is vowel
  if (isVowel(str[0])) {
    return str + vowelSuffix;
  }
  // First letter is consonant
  else {
    var consArr = [];
    var strArr = str.split("");
    for (var i = 0; i < strArr.length; i++) {
      if (isVowel(strArr[i])) {
        var consStr = consArr.join("");
        var reminderStr = str.substr(i, (strArr.length -1));
        return reminderStr + consStr + consSuffix;
      }
      else {
        consArr.push(strArr[i]);
      }
    }
  }
}

/* Checks if a letter is a vowel */
function isVowel(letter) {
  var vowelRe = /^[aeiou]$/i;
  return vowelRe.test(letter);
}

translatePigLatin("glove");

/* DNA Pairing */

function pairElement(str) {
  var pairingObj = {
    "G": "C",
    "C": "G",
    "A": "T",
    "T": "A"
  };
  var strArr = str.split("");
  return strArr.map(function(element) {
    return [element, pairingObj[element]];
  });
}

pairElement("GCG");

/* Missing letters */

function fearNotLetter(str) {
  var strArr = str.split("");
  // Initial value is the first letter
  var resultLetter;
  for (var i = 0; i < strArr.length ; i++) {
    if (i !== 0) {
      var prevCharCode = strArr[i - 1].charCodeAt();
      var currentCharCode = strArr[i].charCodeAt();
      if ((currentCharCode - prevCharCode) != 1) {
        resultLetter = String.fromCharCode((prevCharCode + 1));
      }
    }
  }
  return resultLetter;
}

fearNotLetter("abce");

/* Boo who */

function booWho(bool) {
  if (typeof(bool) == "boolean") {
    return true;
  }
  else {
    return false;
  }
}

booWho(null);

/* Sorted Union */

function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(prevArr, currentArr) {
    return prevArr.concat(removeRepeated(prevArr, currentArr));
  });
}

function removeRepeated(srcArr, compareArr) {
  var resultArr = [];
  for (var i = 0; i < compareArr.length; i++) {
    if (srcArr.indexOf(compareArr[i]) < 0) {
      resultArr.push(compareArr[i]);
    }
  }
  return resultArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/* Convert HTML Entities */

function convertHTML(str) {
  var entitiesObj = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  var entitiesRe = new RegExp(/[&<>"']/g);
  return str.replace(entitiesRe, function(match) {
    return entitiesObj[match];
  });
}

convertHTML("Hamburgers < Pizza < Tacos");

/* Spinal Tap Case */

function spinalCase(str) {
  var capitalsRe = /(?!^)([A-Z])/g;
  var spinalRe = /[\s_]+(?=[a-zA-Z])/g;
  str = str.replace(capitalsRe, function(match) {
    return ' ' + match;
  });
  return str.replace(spinalRe, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');

/* Sum All Odd Fibonacci Numbers */

function sumFibs(num) {
  var sumArr = [];
  var currentFib;
  for (var i = 1; i >= 0; i++){
    currentFib = fibonacci(i);
    if (currentFib > num) {
      break;
    }
    else{
      if ((currentFib % 2) !== 0) {
        sumArr.push(currentFib);
      }
    }
  }
  console.log(sumArr);
  return sumArr.reduce(function(a, b) {
    return a + b;
  });
}

function fibonacci(num) {
  if (num <= 2) {
    return 1;
  }
  else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

sumFibs(75025);

/* Sum All Primes */


function sumPrimes(num) {
  var primeArr = [];
  for (var i = 1; i <= num; i++) {
    if (isPrime(i)) {
      primeArr.push(i);
    }
  }
  return primeArr.reduce(function(a, b){
    return a + b;
  });
}

// Verifies if number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  else if (num <= 3) {
    return true;
  }
  else if ((num % 2 === 0) || (num % 3 === 0)) {
    return false;
  }
  var i = 5;
  while ((i * i) <= num) {
    if ((num % i === 0) || (num % (i + 2) === 0)) {
      return false;
    }
    i += 6;
  }
  return true;
}

sumPrimes(10);
