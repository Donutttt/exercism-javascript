var toRoman = function(number) {
  var outputArray = [],
    ones  = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    thousands = ["", "M", "MM", "MMM"],
    units = [ones, tens, hundreds, thousands],
    digits = number.toString().split("").reverse(),
    i = 0;
  while (digits.length > 0) {
    var digit = digits.splice(0,1);
    outputArray.push(units[i][digit]);
    i++;
  }
  return outputArray.reverse().join("");
};
