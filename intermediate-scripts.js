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
