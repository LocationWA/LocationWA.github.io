function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 47.608013, lng: -122.335167},
		zoom: 13
	});
}

window.onload = function() {
	var buttons = document.getElementsByClassName('button');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('mouseover', function() {
			this.style.transform = 'scale(1.1)';
		});
		buttons[i].addEventListener('mouseout', function() {
			this.style.transform = 'scale(1)';
		});
	}
};