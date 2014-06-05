var fizzbuzz = function(a){
	if(Number.isInteger(a / 5) && !Number.isInteger(a / 3) && a != 0){
		return "buzz";
	}
	if(Number.isInteger(a / 3) && !Number.isInteger(a / 5) && a != 0){
		return "fizz";
	}
	if(Number.isInteger(a / 3) && Number.isInteger(a / 5) && a != 0){
		return "fizzbuzz";
	}
	else{
		return a;
	}
}