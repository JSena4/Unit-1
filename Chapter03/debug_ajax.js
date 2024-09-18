

/*This function makes an AJAX call to fetch GeoJSON data and then process it.*/
function debugAjax(){
	
	var myData;

	fetch("data/MegaCities.geojson")
		.then(conversion)
		.then(function(response){
			debugCallback(response);
		})
		

	document.querySelector("#mydiv")
	.insertAdjacentHTML('beforeend' ,'<br>GeoJSON data:<br>' + JSON.stringify(myData))
};
/*
document.querySelector("#mydiv")
.insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
*/

//Purpose of the frunction all together is to handle the response from an AJAX call.
function debugCallback(response){
	//Selects HTML elements with "mydiv" ID.
	document.querySelector("#mydiv")
	/*Inserts HTML content before the end of #mydiv sections, appending the string provided 
	and a stringified version of myData. */
	.insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
};

debugAjax();