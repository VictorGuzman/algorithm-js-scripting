/* Validate US Telephone Numbers */

function telephoneCheck(str) {
  var re = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return re.test(str);
}

telephoneCheck("555-555-5555");

/* Symmetric Difference */

function sym(args) {
  args = Array.prototype.slice.call(arguments);
  return args.reduce(function(acc, suc) {
    acc = removeDuplicates(acc);
    suc = removeDuplicates(suc);
    acc = diffArray(acc, suc);
    return acc;
  });
}

// Remove duplicates from array
function removeDuplicates(arr) {
  var result = [];
  arr.forEach(function(element){
    if (result.indexOf(element) < 0) {
      result.push(element);
    }
  });
  return result;
}

// Find symetric difference from two arrays
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

sym([1, 2, 3], [5, 2, 1, 4]);
