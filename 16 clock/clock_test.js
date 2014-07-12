var at = function(hour, minute) {
  var outputString = "";
  if (hour >= 10) {
      var h = hour;
  } else {
      var h = "0" + hour;
  }
  if (minute >= 10) {
      var m = minute;
  } else if (minute >= 0){
      var m = "0" + minute ;
  } else {
      var m = "00";
  }
    return outputString + h + ":" + m;
};

String.prototype.plus = function (minutes) {
    var h = +(this[0] + this[1]);
    var m = +(this[3] + this[4]);
    m+=minutes;
    if (m >= 60) {
        m = m % 60;
        h += Math.ceil(m / 60);
    }
    if (h >= 24) {
        h = h % 24;
    }
    return (at(h,m));
};

String.prototype.minus = function (minutes) {
    var h = +(this[0] + this[1]);
    var m = +(this[3] + this[4]);
    if (m - minutes < 0) {
    // if (minutes > 0) {
        m = 60 - ((minutes - m) % 60);
        if (h - Math.ceil(minutes / 60) < 0) {
            h = 24 - Math.ceil(minutes / 60);
        } else {
            h -= Math.ceil(minutes / 60);
        }
    } else {
        m -= minutes;
    }
    return at(h,m);

};
at(10,3).minus(4);

// 10:03 - 10:00
// 10:03 - 9:33
// 10:03 - 8:53
// 00:03 - 23:59