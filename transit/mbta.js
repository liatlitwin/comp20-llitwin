var stations = [
{"Line":"Blue","station":"Wonderland","lat":42.41342,"long":-70.991648},
{"Line":"Blue","station":"Revere Beach","lat":42.40784254,"long":-70.99253321},
{"Line":"Blue","station":"Beachmont","lat":42.39754234,"long":-70.99231944},
{"Line":"Blue","station":"Suffolk Downs","lat":42.39050067,"long":-70.99712259},
{"Line":"Blue","station":"Orient Heights","lat":42.386867,"long":-71.00473599999999},
{"Line":"Blue","station":"Wood Island","lat":42.3796403,"long":-71.02286539000001},
{"Line":"Blue","station":"Airport","lat":42.374262,"long":-71.030395},
{"Line":"Blue","station":"Maverick","lat":42.36911856,"long":-71.03952958000001},
{"Line":"Blue","station":"Aquarium","lat":42.359784,"long":-71.051652},
{"Line":"Blue","station":"State Street","lat":42.358978,"long":-71.057598},
{"Line":"Blue","station":"Government Center","lat":42.359705,"long":-71.05921499999999},
{"Line":"Blue","station":"Bowdoin","lat":42.361365,"long":-71.062037},

{"Line":"Orange","station":"Oak Grove","lat":42.43668,"long":-71.07109699999999},
{"Line":"Orange","station":"Malden Center","lat":42.426632,"long":-71.07411},
{"Line":"Orange","station":"Wellington","lat":42.40237,"long":-71.077082},
{"Line":"Orange","station":"Sullivan","lat":42.383975,"long":-71.076994},
{"Line":"Orange","station":"Community College","lat":42.373622,"long":-71.06953300000001},
{"Line":"Orange","station":"North Station","lat":42.365577,"long":-71.06129},
{"Line":"Orange","station":"Haymarket","lat":42.363021,"long":-71.05829},
{"Line":"Orange","station":"State Street","lat":42.358978,"long":-71.057598},
{"Line":"Orange","station":"Downtown Crossing","lat":42.355518,"long":-71.060225},
{"Line":"Orange","station":"Chinatown","lat":42.352547,"long":-71.062752},
{"Line":"Orange","station":"Tufts Medical","lat":42.349662,"long":-71.063917},
{"Line":"Orange","station":"Back Bay","lat":42.34735,"long":-71.075727},
{"Line":"Orange","station":"Mass Ave","lat":42.341512,"long":-71.083423},
{"Line":"Orange","station":"Ruggles","lat":42.336377,"long":-71.088961},
{"Line":"Orange","station":"Roxbury Crossing","lat":42.331397,"long":-71.095451},
{"Line":"Orange","station":"Jackson Square","lat":42.323132,"long":-71.099592},
{"Line":"Orange","station":"Stony Brook","lat":42.317062,"long":-71.104248},
{"Line":"Orange","station":"Green Street","lat":42.310525,"long":-71.10741400000001},
{"Line":"Orange","station":"Forest Hills","lat":42.300523,"long":-71.113686},

{"Line":"Red","station":"Alewife","lat":42.395428,"long":-71.142483},
{"Line":"Red","station":"Davis","lat":42.39674,"long":-71.121815},
{"Line":"Red","station":"Porter Square","lat":42.3884,"long":-71.11914899999999},
{"Line":"Red","station":"Harvard Square","lat":42.373362,"long":-71.118956},
{"Line":"Red","station":"Central Square","lat":42.365486,"long":-71.103802},
{"Line":"Red","station":"Kendall/MIT","lat":42.36249079,"long":-71.08617653},
{"Line":"Red","station":"Charles/MGH","lat":42.361166,"long":-71.070628},
{"Line":"Red","station":"Park Street","lat":42.35639457,"long":-71.0624242},
{"Line":"Red","station":"Downtown Crossing","lat":42.355518,"long":-71.060225},
{"Line":"Red","station":"South Station","lat":42.352271,"long":-71.05524200000001},
{"Line":"Red","station":"Broadway","lat":42.342622,"long":-71.056967},
{"Line":"Red","station":"Andrew","lat":42.330154,"long":-71.057655},
{"Line":"Red","station":"JFK/UMass","lat":42.320685,"long":-71.052391},
{"Line":"Red","station":"North Quincy","lat":42.275275,"long":-71.029583},
{"Line":"Red","station":"Wollaston","lat":42.2665139,"long":-71.0203369},
{"Line":"Red","station":"Quincy Center","lat":42.251809,"long":-71.005409},
{"Line":"Red","station":"Quincy Adams","lat":42.233391,"long":-71.007153},
{"Line":"Red","station":"Braintree","lat":42.2078543,"long":-71.0011385},
{"Line":"Red","station":"Quincy Adams","lat":42.233391,"long":-71.007153},
{"Line":"Red","station":"Quincy Center","lat":42.251809,"long":-71.005409},
{"Line":"Red","station":"Wollaston","lat":42.2665139,"long":-71.0203369},
{"Line":"Red","station":"North Quincy","lat":42.275275,"long":-71.029583},
{"Line":"Red","station":"JFK/UMass","lat":42.320685,"long":-71.052391},

{"Line":"Red","station":"Savin Hill","lat":42.31129,"long":-71.053331},
{"Line":"Red","station":"Fields Corner","lat":42.300093,"long":-71.061667},
{"Line":"Red","station":"Shawmut","lat":42.29312583,"long":-71.06573796000001},
{"Line":"Red","station":"Ashmont","lat":42.284652,"long":-71.06448899999999}];

Array.prototype.min = function(){
	return Math.min.apply(null, this);
};
Number.prototype.toRad = function() {
   return this * Math.PI / 180;
}
var myLat = 0;
var myLng = 0;
var request = new XMLHttpRequest();
var me = new google.maps.LatLng(myLat, myLng);
var myOptions = {
		zoom: 12, // The larger the zoom number, the bigger the zoom
		center: me,
		mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map;
var marker;
var MyMarker;
var infowindow = new google.maps.InfoWindow();
var xhr;
var line_color;
var shortest = 100000000000;
var shortest_station;
var stationCoords = new Array();
var image = {
	url: 'T_stop.png',
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(15,15)
}
var distances = new Array();

	function init()
	{
		map = new google.maps.Map(document.getElementById("map"), myOptions);
		getMyLocation();

	}

	function getMyLocation()
	{
		if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
			navigator.geolocation.getCurrentPosition(function(position) {
				myLat = position.coords.latitude;
				myLng = position.coords.longitude;
				me = new google.maps.LatLng(myLat, myLng);			
				// Update map and go there...
				map.panTo(me);

				xhr = new XMLHttpRequest();
				xhr.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);
				xhr.onreadystatechange = dataReady;
				xhr.send(null);
			});
		}
		
		else {
			alert("Geolocation is not supported by your web browser.  What a shame!");
		}
	}
	function dataReady(){
		if(xhr.readyState == 4 && xhr.status == 200){
			//successful
			createMarkers();

		}
		else if(xhr.readyState == 4 && xhr.status == 500){
			alert("Error: so much fail!")
		}
	}
	function createMarkers()
	{
		data = JSON.parse(xhr.responseText);
		line_color = data["line"];
		
		stations.forEach(function(station){
			if(station.Line.toLowerCase() == line_color){

				var stationLoc = new google.maps.LatLng(station.lat, station.long);
				if(calculateDistance(station.lat, station.long) < shortest){
					shortest = calculateDistance(station.lat, station.long);
					shortest_station = station.station;
				}

				
				var marker = new google.maps.Marker({
					map: map,
					position: stationLoc,
					icon: image
				});

				var content = "<strong>" + station.station + "</strong>" + '<table id="schedule"><tr><th>Line</th><th>Trip #</th><th>Direction</th><th>Time Remaining</th></tr>';
				data.schedule.forEach(function(trip){
					trip.Predictions.forEach(function(prediction){
						if(prediction.Stop == station.station){
							content += "<tr><td>" + line_color + "</td>";
							content += "<td>" + trip.TripID + "</td>";
							content += "<td>" + trip.Destination + "</td>";
							
							minutes = Math.floor(prediction.Seconds/60);
							seconds = prediction.Seconds - (minutes*60);
							if(minutes < 10){minutes = "0" + minutes}
							if(seconds < 10){seconds = "0" + seconds}
							content += "<td>" + minutes +":" + seconds +"</td>";
						}
					});
				});

				stationCoords.push(stationLoc);
				google.maps.event.addListener(marker, 'click', function() {
					infowindow.close();
					infowindow.setContent(content);
					infowindow.open(map, this);
				});
			} 

		});
		
		MyMarker = new google.maps.Marker({
					position: me,
				});
		MyMarker.setMap(map);
		shortest = Math.Round((shortest*100), 100);
		infowindow.setOptions({ 
			content: "You are here! <br> Closest station: " + shortest_station + "<br> Distance: " + shortest + "miles",
			position: me,
		});
		infowindow.open(map, MyMarker);


		var polyLine = new google.maps.Polyline({
			path: stationCoords,
			geodesic: true,
			map: map,
			strokeColor: line_color,
			strokeWeight: 5
		});
		
	}
	

	function calculateDistance(lat, lng){
		var R = 6371; // km 
		var x1 = lat - myLat;
		var dLat = x1.toRad();  
		var x2 = lng- myLng;
		var dLon = x2.toRad();  
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
		                Math.cos(myLat.toRad()) * Math.cos(lat.toRad()) * 
		                Math.sin(dLon/2) * Math.sin(dLon/2);  
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var d = R * c; 
		return d;

		
	}


	

	