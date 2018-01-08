function isEqual(a, b){
	if(a == b){
		return "They are Equal!";
	}
	else{
		return "They are not Equal :(";
	}
}

console.log(isEqual(process.argv[2], process.argv[3]));