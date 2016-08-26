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

/* Exact Change */

var denoms = [
  { name: "ONE HUNDRED", value: 100.00 },
  { name: "TWENTY", value: 20.00 },
  { name: "TEN", value: 10.00 },
  { name: "FIVE", value: 5.00 },
  { name: "ONE", value: 1.00 },
  { name: "QUARTER", value: 0.25 },
  { name: "DIME", value: 0.10 },
  { name: "NICKEL", value: 0.05 },
  { name: "PENNY", value: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var totalCid = cid.reduce(function(acc, succ) {
    return acc += succ[1];
  },0.0);
  if (totalCid < change) {
    return "Insufficient Funds";
  }
  else if (totalCid === change) {
    return "Closed";
  }
  else {
    cid = cid.reverse();
    var exactChange = denoms.reduce(function(acc, succ, index){
      if (change >= succ.value) {
        var changeDiff = 0.0;
        while (change >= succ.value && cid[index][1] >= succ.value) {
          changeDiff += succ.value;
          change -= succ.value;
          change = Math.round(change * 100) / 100;
          cid[index][1] -= succ.value;
        }
        acc.push([succ.name, changeDiff]);
        return acc;
      }
      else {
        return acc;
      }
    }, []);
    return exactChange.length > 0 && change === 0 ? exactChange : "Insufficient Funds";
  }
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

/* Inventory Update */

function updateInventory(arr1, arr2) {
  var resArr = [];
  arr2.forEach(function(articleArr) {
    var articleName = articleArr[1];
    var articleQuant = articleArr[0];
    if (isInInventory(arr1, articleName)) {
      arr1 = updateInvArticle(arr1, articleName, articleQuant);
    }
    else {
      arr1.push(articleArr);
    }
  });
  return sort2DArray(arr1);
}

// Checks if an article is present in an inventory array
function isInInventory(invArr, articleName) {
  var res = false;
  invArr.forEach(function(articleArr) {
    if (articleArr.indexOf(articleName) > 0) {
      res = true;
    }
  });
  return res;
}

// Updtaes an existing article in current inventory
function updateInvArticle(invArr, articleName, quant) {
  invArr.forEach(function(articleArr) {
    if (articleArr.indexOf(articleName) > 0) {
      articleArr[0] += quant;
    }
  });
  return invArr;
}

// Sorts a 2D array
function sort2DArray(arr) {
  return arr.sort(function(a, b) {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  });
}


// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
