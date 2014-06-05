var factorial = function(a){
	if(a > 0){
		if(Number.isInteger(a)){
			var n = a;
			var fac = a;
			while(n >= 0){
				if(n >= 1){
					fac = fac * (n - 1);
				}
				if(n = 0){
					return fac;
				}
				n = n - 1;
			}
			else if(Number.isFinite(a)){

			}
		}
	}
	else{
		return null;
	}
}