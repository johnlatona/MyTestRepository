function Programmer(name, jobTitle, age, favoriteLanguage) {
	this.name = name;
	this.jobTitle = jobTitle;
	this.age = age;
	this.favoriteLanguage = favoriteLanguage;

	this.printInfo = function() {
		console.log("Name: " + this.name);
		console.log("Job Title: " + this.jobTitle);
		console.log("Age: " + this.age);
		console.log("Favorite Programming Language: " + this.favoriteLanguage);
	}
}

var john = new Programmer("John", "Jr. Developer", 30, "JavaScript");

john.printInfo();