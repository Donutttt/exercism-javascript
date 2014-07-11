var Triangle = function(a, b, c) {
  this.a = a, this.b = b, this.c = c;
	this.kind = function() {
		if (a === undefined || b === undefined || c === undefined || a <= 0 || b <= 0 || c <= 0) {
			return "illegal";
		} else if (a === b && b === c) {
			return "equilateral";
		} else if (a + b <= c || a + c <= b || c + b <= a) {
			return "illegal"
		} else if (a === b || b === c || a === c) {
			return "isosceles";
		} else if (a !== b && b !== c && a !== c) {
			return "scalene";
		}
	}
};
