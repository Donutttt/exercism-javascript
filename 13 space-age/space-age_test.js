function roundTo (number, decimals) {
	return +number.toFixed(2)
}

function SpaceAge(seconds){
	this.seconds = seconds;
	this.onEarth = function(){
		return roundTo(seconds / 31557600, 2);
	};
	this.onMercury = function() {
		return roundTo(this.onEarth() / 0.2408467);
	};
	this.onVenus = function() {
		return roundTo(this.onEarth() / 0.61519726);
	};
	this.onMars = function() {
		return roundTo(this.onEarth() / 1.8808158);
	};
	this.onJupiter = function() {
		return roundTo(this.onEarth() / 11.862615);
	};
	this.onSaturn = function() {
		return roundTo(this.onEarth() / 29.447498);
	};
	this.onUranus = function() {
		return roundTo(this.onEarth() / 84.016846);
	};
	this.onNeptune = function() {
		return roundTo(this.onEarth() / 164.79132);
	};
}