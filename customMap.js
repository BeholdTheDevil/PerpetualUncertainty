$(function () {

	function initMap() {
		var location = new google.maps.LatLng(63.820695, 20.276171);

		var mapCanvas = document.getElementById('map');
		var mapOptions = {
			center: location,
			zoom: 16,
			panControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(mapCanvas, mapOptions);

		var marker = new google.maps.Marker({
			position: location,
			map: map
		});

		var contentString = '<div class="info-window" style="display:flex;flex-direction:column;">' + 
							'<h3 style="margin:auto;">Bildmuseet Umeå</h3>' +
							'<img id="info-window-image" src="/home/anton/private/course/webbutveckling/PerpetualUncertainty/Konst_Images/Ny mapp/Bildmuseet1600x533.jpg" alt="Bildmuseet" onclick="myFunction()">' +
							'</div>';
		var infoWindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 400
		});

		marker.addListener('click', function() {
			infoWindow.open(map, marker);
		})
	}

	google.maps.event.addDomListener(window, 'load', initMap);
});