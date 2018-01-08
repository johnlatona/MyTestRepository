var fs = require('fs');

fs.readFile("best_things_ever.txt", "utf8", function(error, data){
	if(error) {
		return console.log(error);
	}

	var dataArr = data.split(", ");

	var dataStr = '';

	for (var i = 0; i < dataArr.length; i++) {
		dataStr += dataArr[i] + "\n";
	}

	console.log(dataStr.trim());

});