/*
This is called the 'Hamming distance'

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

The Hamming distance between these two DNA strands is 7.
*/

var compute = function (str1, str2) {
	var length = Math.min(str1.length, str2.length);
	var hamming = 0;
	for (i = 0; i < length; i++) {
		if (str1.charAt(i) !== str2.charAt(i)) {
			hamming++;
		}
	}
	return hamming;
}