function addEvent() {
    var pesronName = "Someone",
        time = "sometime",
        place = "somewhere",
        event = prompt("Add some event", "Something");
        
        if (event === undefined || !isNaN(event)) {
        alert("Please Enter some text, and dont leave the field empty");
    	} else {
    	console.log(pesronName, "have", event, time, place); 
    	}
}

function convertorEx() {
	var euro = prompt("Введіть кількість EUR"),
		dollar = prompt("Введіть кількість USD"),
		rateEuro = 30.11,
		rateDollar = 25.54;
		
		if (Number(euro) && Number(dollar)) {
    	var USDGRN = (dollar * rateDollar).toFixed(2),
    		EURGRN = (euro * rateEuro).toFixed(2),
        	EURUSD = (EURGRN / USDGRN).toFixed(2);
        alert(euro + " euros are equal " + EURGRN + "grns, " + dollar + " dollars are equal "
         + USDGRN + "grns , one euro is equal " + EURUSD + " dollar");
    	} else {
        alert("Please Enter a numbers");
   		}
}