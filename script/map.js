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

		jQuery.ajax(
                './ra-men.xml',
                {
                    dataType : 'xml',
                    success : function( data ) {
                        jQuery ( data ) . find( 'J' ) . each( function() {
                            var address = jQuery(this).find('Address').text();
                            var info = jQuery(this).find('TITLE').text();
                            var productName = jQuery(this).find('NAME').text();
                            var productPrice = jQuery(this).find('PRICE').text();
                            var day = jQuery(this).find('holiday').text();
                            var business = jQuery(this).find('Business-hours').text();
                            var pic = jQuery(this).find('picture').text();
                            
                    		var content = '<img src=../picture/' + pic + ' width="24" height="24" alt="ra-men" />' + info + '</div><div>' + '</div><div>' + address + 
                    			'</div><div>おすすめメニュー：' + productName + '　値段' + productPrice + '</div><div>' + business + '</div>定休日：' + day + '</div>';
                    		var infowindow = new google.maps.InfoWindow({
                    		    content: content
                    		});
                    		
                            var geocoder = new google.maps.Geocoder();
                                if (geocoder) {
                                  geocoder.geocode( { 'address': address}, function(results, status) {
                                    if (status == google.maps.GeocoderStatus.OK) {
                                      var marker = new google.maps.Marker({
                                    	  animation: google.maps.Animation.BOUNCE,
                                          map: map, 
                                          position: results[0].geometry.location
                                      });
                                      google.maps.event.addListener(marker, 'click', function() {
                                    	  infowindow.open(map,marker);
                                      });
                                    } else {
                                      //alert(status);
                                    }
                                  });
                                }
                        });
                    },
                    error: function( data ) {
                    	alert("xmlファイル読み込みエラー");
                    }
                });
		
	}
