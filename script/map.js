	var map;
	var geo;
	var lat,lng;

	function fnc(latlng, status){
		lat=latlng[0].geometry.location.lat();
		lng=latlng[0].geometry.location.lng();
		mapcreate();
	}

	function funaokaInit() {
		geo = new google.maps.Geocoder();
		geo.geocode({'address':"岡山県,岡山市"},fnc);
	}

	function mapcreate(){
		var latlng = new google.maps.LatLng(lat, lng);
		var opts = {
				zoom: 14,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				center: latlng
		};

		// Mapオブジェクトの生成
		// getElementById("map")の"map"は、body内の<div id="map">より
		map = new google.maps.Map(document.getElementById("map_canvas"), opts);

  		var m_latlng = new google.maps.LatLng(lat,lng);
  		var marker = new google.maps.Marker({
    		position: m_latlng,
    		map: map
  		});
	}