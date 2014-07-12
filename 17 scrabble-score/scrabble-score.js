var score = function(inputString) {
  if (inputString === null) {
  	return 0;
  }
  var points = 0;
	var scores = {
		aeioulnrst: 1,
		dg: 2,
		bcmp: 3,
		fhvwy: 4,
		k: 5,
		jx: 8,
		qz: 10
	};
	var array = inputString.toLowerCase().split("");
	for (var i = 0; i < array.length; i++) {
		for (key in scores) {
            if (key.indexOf(array[i]) >= 0) {
                points+= scores[key];
            }
		}
	}
	return points;
};

score("dog");