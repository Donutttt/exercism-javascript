var Grains = function() {
    this.square = function(number) {
        if (number === 1) {
            return 1;
        } else {
            return Math.pow(2, number - 1);
        }
    };
    this.total = function() {
    	var total = 0;
    	for (var i = 1; i <= 64; i++) {
    		total+=this.square(i);
    	}
    	return total;
    }
};
