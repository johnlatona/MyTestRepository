
function Character(name, profession, gender, age, strength, hitPoints) {
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.hitPoints = hitPoints;
	this.printStats = function() {
		console.log("\nName: " + this.name + "\nProfession: " + this.profession + "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " + this.strength + "\nHitPoints (HP): " + this.hitPoints + "\n");
	}
	this.isAlive = function() {
		if(this.hitPoints > 0) {
			console.log("\n" + this.name + " is alive.");
		}
		else {
			console.log("\n" + this.name + " is dead.");
		}
	}
	this.attack = function(secondCharacter) {
		secondCharacter.hitPoints -= this.strength;
		console.log("\n" + this.name + " attacked " + secondCharacter.name);
		console.log(secondCharacter.name + "'s HitPoints are now " + secondCharacter.hitPoints + "\n");
	}
	this.levelUp = function() {
		this.age++;
		this.strength += 5;
		this.hitPoints += 25;
		console.log("\n" + this.name + " has leveled up!\n");
		console.log(this.name + "'s stats are now: ");
		this.printStats();
	}
}

var george = new Character("George", "Web Developer", "Male", 32, 7, 45);
var benjamin = new Character("Benjamin", "Salesman", "Male", 29, 5, 67);

//Adds new method or property to constructor function outside of the function declaration!
Character.prototype.blah = function() {
	console.log(this.name + " says Blah!");
}

george.blah();//will log George says Blah!
benjamin.blah();//will log Benjamin says Blah!

george.attack(benjamin);
benjamin.attack(george);

george.isAlive();
benjamin.isAlive();

george.printStats();
benjamin.printStats();

george.levelUp();

