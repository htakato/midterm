var findFirstEvenNumber = function(a){
	var index = 0;
	while(index < a.length){
		var b = a[index];
		if(!Number.isInteger(b / 2)){
			index = index + 1;
		}
		else{
			return b;
		}
	}
};