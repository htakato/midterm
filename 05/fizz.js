var fizz = function(a){
	if(Number.isInteger(a / 3) && a != 0){
		return "fizz";
	}
	else{
		return a;
	}
}