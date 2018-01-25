var inquirer = require("inquirer");

function Player(name, position, offense, defense) {
	this.name = name;
	this.position = position;
	this.offense = offense;
	this.defense = defense;

	this.goodGame = function () {
		var coinFlip = Math.floor(Math.random() * 2)
		if(coinFlip === 0) {
			this.offense++;
			console.log(this.name + "'s offense has increased by 1!");
		}
		else {
			this.defense++;
			console.log(this.name + "'s defense has increased by 1!");
		}
	}

	this.badGame = function() {
		var coinFlip = Math.floor(Math.random() * 2)
		if(coinFlip === 0) {
			this.offense--;
			console.log(this.name + "'s offense has decreased by 1...");
		}
		else {
			this.defense--;
			console.log(this.name + "'s defense has decreased by 1...");
		}
	}

	this.printStats = function () {
		console.log(`Name: ${this.name}`);
		console.log(`Position: ${this.position}`);
		console.log(`Offense: ${this.offense}`);
		console.log(`Defense: ${this.defense}`);
	}
}

var count = 0;

var starters = [];
var subs = [];

function createTeam() {

	if(count < 8) {
		inquirer.prompt([
			{
				name: "name",
				message: "Please enter the Player's name",
				type: "input"
			},
			{
				name: "position",
				message: "Please select the Player's position",
				choices: ["Point Guard", "Shooting Guard", "Small Forward", "Power Forward", "Center"],
				type: "list"	
			},
			{
				name: "offense",
				message: "Please enter the Player's Offense rating",
				validate: function(input) {
					if(isNaN(input)) {
						return "Please enter a valid number";
					}
					else if(parseInt(input) > 10 || parseInt(input) < 1) {
						return "Please enter a number between 1 and 10";
					}
					else {
						return true;
					}
				},
				type: "input"	
			},
			{
				name: "defense",
				message: "Please enter the Player's Defense rating",
				validate: function(input) {
					if(isNaN(input)) {
						return "Please enter a valid number";
					}
					else if(parseInt(input) > 10 || parseInt(input) < 1) {
						return "Please enter a number between 1 and 10";
					}
					else {
						return true;
					}
				},
				type: "input"	
			}
		])
		.then(function(answers) {
			console.log(answers);

			var newPlayer = new Player(answers.name, answers.position, answers.offense, answers.defense)

			newPlayer.printStats();

			if(starters.length < 5) {
				starters.push(newPlayer);
			}
			else {
				subs.push(newPlayer);
			}

			count++;
			createTeam();
		});
	}
	else {
		console.log("We've got our team!");

		console.log("HERE ARE YOUR STARTING FIVE: ");
		for (var i = 0; i < starters.length; i++) {
			starters[i].printStats();
		}

		console.log("HERE ARE YOUR SUBS: ");
		for (var i = 0; i < starters.length; i++) {
			subs[i].printStats();
		}

		playGame();
	}
}

var playCount = 0;

function playGame() {

	var score = 0;

	if(playCount < 5){
		var randomOffense = Math.floor(Math.random() * 20) + 1;
		var randomDefense = Math.floor(Math.random() * 20) + 1;

		var totalTeamOffense = 0;
		var totalTeamDefense = 0;

		for(var i = 0; i < starters.length; i++) {
			totalTeamOffense += starters[i].offense;
			totalTeamDefense += starters[i].defense;
		}

		if(randomDefense < totalTeamOffense) {
			score++;
			console.log("You just scored a point!");
		}

		if(randomOffense < totalTeamDefense) {
			score--;
			console.log("Play some defense! You just got dunked on!");
		}

		inquirer.prompt([
			{
				type: "confirm",
				name: "confirmSub",
				message: "Would you like to sub?"
			}
		]).then(function(answer){
			if(answer.confirmSub) {
				inquirer.prompt([
					{
						type: "list",
						name: "sub",
						message: "Who would you like to sub in?"
						choices: subs
					}
				]).then(function(subIn) {
					
				});
			}
		});


	}
}

createTeam();