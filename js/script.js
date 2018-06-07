// Alert not ready

var notReady = function() {
	alert("This feature is not ready yet.");
}

// Add seeMap function to divs

var addSeeMap = function(el, url) {
	for (var i = 0; i < el.length; i++) {
		el[i].addEventListener("click", function() {
			window.open(url);
		});
	}
}



window.onload = function() {
	var guidebooks = document.getElementsByClassName("guidebooks")[0];
	var destinations = document.getElementsByClassName("destinations")[0];
	var address = ["https://www.google.com.sg/maps/place/San+Francisco,+CA,+USA/@37.7576171,-122.5776844,11z/data=!3m1!4b1!4m5!3m4!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155", "https://www.google.com.sg/maps/place/New+York,+NY,+USA/@40.6971494,-74.259863,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728", "https://www.google.com.sg/maps/place/London,+UK/@51.5285582,-0.2416806,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583", "https://www.google.com.sg/maps/place/Napa,+CA,+USA/@38.2861488,-122.4300436,11z/data=!3m1!4b1!4m8!1m2!2m1!1snapa!3m4!1s0x8084ffe7f8f2deef:0xd6629f3a3384c725!8m2!3d38.2975381!4d-122.286865", "https://www.google.com.sg/maps/place/Sonoma,+CA+95476,+USA/@38.2912073,-122.5191397,12z/data=!3m1!4b1!4m5!3m4!1s0x8085ac43817b9d77:0x380ed210ee6e045!8m2!3d38.291859!4d-122.4580356", "https://www.google.com.sg/maps/place/San+Francisco,+CA,+USA/@37.7579113,-122.7177894,10z/data=!3m1!4b1!4m5!3m4!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155"];
	// console.log(address.length);
	var places = document.getElementsByClassName("places");
	// console.log(places.length);
	addSeeMap(places, address);
	guidebooks.addEventListener("click", notReady);
	destinations.addEventListener("click", notReady);	
}