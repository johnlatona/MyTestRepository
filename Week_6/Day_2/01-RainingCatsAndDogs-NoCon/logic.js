
var dogs = {
	raining: true,
	noise: "Woof!",
	makeNoise: function() {
		if(this.raining === true) {
			console.log(this.noise);
		}
	}
}

var cats = {
	raining: false,
	noise: "Meow!",
	makeNoise: function() {
		if(this.raining === true) {
			console.log(this.noise);
		}
	}
}

cats.raining = true;

function massHysteria(dogsObj, catsObj) {
	if(dogsObj.raining === true && catsObj.raining === true) {
		return "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!"
	}
	else {
		return "Dogs and cats are not living together. It's calm...for now!"
	}
}

console.log(massHysteria(dogs, cats));
dogs.makeNoise();
cats.makeNoise();