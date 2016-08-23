/* Validate US Telephone Numbers */

function telephoneCheck(str) {
  var re = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return re.test(str);
}

telephoneCheck("555-555-5555");
