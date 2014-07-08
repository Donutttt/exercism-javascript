var transform = function (inputObject) {
  var outputObject = {};
  Object.keys(inputObject).forEach(function (key) {
    for (var i = 0; i < inputObject[key].length; i++) {
      outputObject[inputObject[key][i].toLowerCase()] = parseInt(key);
    }
  });
  return outputObject;
};