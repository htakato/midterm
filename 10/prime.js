var prime = function(a){
	if(Number.isInteger(a) && a > 0){
		if(a = 1){
			return false;
		}
		else if((a = 1) && (a / 2 >= 2) && (a / 3 >= 2) && (a / 5 >= 2) && (a / 7 >= 2)){
			return true;
		}
	}
	else{
		return false;
	}
}