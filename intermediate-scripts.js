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
