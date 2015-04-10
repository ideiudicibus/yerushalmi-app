$(function() {
  $(window).resize(function() {
    $('#map').css('height', window.innerHeight - 82 - 45);
  });
  $(window).resize(); // trigger resize event
});

//var Markers = new Meteor.Collection('markers');

Meteor.subscribe('markers');

Template.map.rendered = function() {
  console.log("map: rendered");	
  $(window).resize();
  
  L.Icon.Default.imagePath = 'images';

  var map = L.map('map', {
    doubleClickZoom: false
  }).setView([49.25044, -123.137], 13);


  L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'idoivri.lkj758a5'
	}).addTo(map);

  
  var restaurantCoffeeIcon = L.MakiMarkers.icon({icon: "restaurant", color: "#009933", size: "m"});
  var transportationIcon = L.MakiMarkers.icon({icon: "bus", color: "#b0b", size: "m"});
  var cultureIcon = L.MakiMarkers.icon({icon: "theatre", color: "#FF0000", size: "m"});
  var leisureIcon = L.MakiMarkers.icon({icon: "music", color: "#FFFF00", size: "m"});
  var consumerIcon = L.MakiMarkers.icon({icon: "gift", color: "#3333CC", size: "m"});
  var sportsIcon = L.MakiMarkers.icon({icon: "school", color: "#FF9900", size: "m"});
  var enrichmentIcon = L.MakiMarkers.icon({icon: "college", color: "#663300", size: "m"});

  //BUGGY CODE? Need to make map markers reactive by using OBSERVE
  var transportationMarkersQuery = Markers.find({
    category: "transportation"
  });//.fetch();

  transportationMarkersQuery.observe({
    added: function (document) {
      //debugger;
      //console.log("OBSERVE: added LatLng of transportation marker #" + ":" + document.lat + " | " + document.lng);

      var latlng = L.latLng(parseFloat(document.lat),parseFloat(document.lng));

      L.marker(latlng, {icon:transportationIcon}).bindPopup(document.htmlStr).addTo(map);
    },
    removed: function (oldDocument) {
      layers = map._layers;
      var key, val;
      for (key in layers) {
        val = layers[key];
        if (val._latlng) {
          if (val._latlng.lat === oldDocument.latlng.lat && val._latlng.lng === oldDocument.latlng.lng) {
            map.removeLayer(val);
          }
        }
      }
    }
  });

  var cultureMarkersQuery = Markers.find({
    category: "culture"
  });

  cultureMarkersQuery.observe({
    added: function (document) {
      //debugger;
      //console.log("OBSERVE: added LatLng of transportation marker #" + ":" + document.lat + " | " + document.lng);
      var latlng = L.latLng(parseFloat(document.lat),parseFloat(document.lng));

      L.marker(latlng, {icon:cultureIcon}).bindPopup(document.htmlStr).addTo(map);
    },
    removed: function (oldDocument) {
      layers = map._layers;
      var key, val;
      for (key in layers) {
        val = layers[key];
        if (val._latlng) {
          if (val._latlng.lat === oldDocument.latlng.lat && val._latlng.lng === oldDocument.latlng.lng) {
            map.removeLayer(val);
          }
        }
      }
    }
  });

  var leisureMarkersQuery = Markers.find({
    category: "leisure"
  });

  leisureMarkersQuery.observe({
    added: function (document) {
      //debugger;
      //console.log("OBSERVE: added LatLng of transportation marker #" + ":" + document.lat + " | " + document.lng);
      var latlng = L.latLng(parseFloat(document.lat),parseFloat(document.lng));

      L.marker(latlng, {icon:leisureIcon}).bindPopup(document.htmlStr).addTo(map);
    },
    removed: function (oldDocument) {
      layers = map._layers;
      var key, val;
      for (key in layers) {
        val = layers[key];
        if (val._latlng) {
          if (val._latlng.lat === oldDocument.latlng.lat && val._latlng.lng === oldDocument.latlng.lng) {
            map.removeLayer(val);
          }
        }
      }
    }
  });

  var restaurantCoffeeMarkersQuery = Markers.find({
    category: "restaurants_coffee"
  });

  restaurantCoffeeMarkersQuery.observe({
    added: function (document) {
      //debugger;
      //console.log("OBSERVE: added LatLng of transportation marker #" + ":" + document.lat + " | " + document.lng);
      var latlng = L.latLng(parseFloat(document.lat),parseFloat(document.lng));

      L.marker(latlng, {icon:restaurantCoffeeIcon}).bindPopup(document.htmlStr).addTo(map);
    },
    removed: function (oldDocument) {
      layers = map._layers;
      var key, val;
      for (key in layers) {
        val = layers[key];
        if (val._latlng) {
          if (val._latlng.lat === oldDocument.latlng.lat && val._latlng.lng === oldDocument.latlng.lng) {
            map.removeLayer(val);
          }
        }
      }
    }
  });

  var consumerMarkersQuery = Markers.find({
    category: "consumer"
  });

  consumerMarkersQuery.observe({
    added: function (document) {
      //debugger;
      console.log("OBSERVE: added LatLng of consumer marker #" + ":" + document.lat + " | " + document.lng);
      var latlng = L.latLng(parseFloat(document.lat),parseFloat(document.lng));

      L.marker(latlng, {icon:consumerIcon}).bindPopup(document.htmlStr).addTo(map);
    },
    removed: function (oldDocument) {
      layers = map._layers;
      var key, val;
      for (key in layers) {
        val = layers[key];
        if (val._latlng) {
          if (val._latlng.lat === oldDocument.latlng.lat && val._latlng.lng === oldDocument.latlng.lng) {
            map.removeLayer(val);
          }
        }
      }
    }
  });

  var sportsMarkersQuery = Markers.find({
    category: "sports"
  });

  sportsMarkersQuery.observe({
    added: function (document) {
      //debugger;
      //console.log("OBSERVE: added LatLng of transportation marker #" + ":" + document.lat + " | " + document.lng);
      var latlng = L.latLng(parseFloat(document.lat),parseFloat(document.lng));

      L.marker(latlng, {icon:sportsIcon}).bindPopup(document.htmlStr).addTo(map);
    },
    removed: function (oldDocument) {
      layers = map._layers;
      var key, val;
      for (key in layers) {
        val = layers[key];
        if (val._latlng) {
          if (val._latlng.lat === oldDocument.latlng.lat && val._latlng.lng === oldDocument.latlng.lng) {
            map.removeLayer(val);
          }
        }
      }
    }
  });
  
  var enrichmentMarkersQuery = Markers.find({
    category: "enrichment"
  });

  enrichmentMarkersQuery.observe({
    added: function (document) {
      //debugger;
      //console.log("OBSERVE: added LatLng of transportation marker #" + ":" + document.lat + " | " + document.lng);
      var latlng = L.latLng(parseFloat(document.lat),parseFloat(document.lng));

      L.marker(latlng, {icon:enrichmentIcon}).bindPopup(document.htmlStr).addTo(map);
    },
    removed: function (oldDocument) {
      layers = map._layers;
      var key, val;
      for (key in layers) {
        val = layers[key];
        if (val._latlng) {
          if (val._latlng.lat === oldDocument.latlng.lat && val._latlng.lng === oldDocument.latlng.lng) {
            map.removeLayer(val);
          }
        }
      }
    }
  });
  


  /*
    markersArrayLength = markersArray.length; 
    
    for (var i = 0; i < markersArrayLength; i++) {
    	var marker = markersArray[i];
    	console.log("LatLng of transportation marker #"+ i + ":" + marker.lat + " | " + marker.lng);

    	var latlng = L.latLng(parseFloat(marker.lat),parseFloat(marker.lng));

  	L.marker(latlng, {icon:busIcon}).bindPopup(marker.htmlStr).addTo(map);
    };
  */


  /*

  var markersArray = Markers.find({
  	category: "culture"
  }).fetch();

  markersArrayLength = markersArray.length; 
  
  for (var i = 0; i < markersArrayLength; i++) {
  	var marker = markersArray[i];
  	console.log("LatLng of leisure marker #"+ i + ":" + marker.lat + " | " + marker.lng);

  	var latlng = L.latLng(parseFloat(marker.lat),parseFloat(marker.lng));

	L.marker(latlng, {icon:theatreIcon}).bindPopup(marker.htmlStr).addTo(map);
  };


  markersArray = Markers.find({
  	category: "leisure"
  }).fetch();


  markersArrayLength = markersArray.length; 
  
  for (var i = 0; i < markersArrayLength; i++) {
  	var marker = markersArray[i];
  	console.log("LatLng of music marker #"+ i + ":" + marker.lat + " | " + marker.lng);

  	var latlng = L.latLng(parseFloat(marker.lat),parseFloat(marker.lng));

	L.marker(latlng, {icon:musicIcon}).bindPopup(marker.htmlStr).addTo(map);
  };

  markersArray = Markers.find({
  	category: "restaurants_coffee"
  }).fetch();


  markersArrayLength = markersArray.length; 
  
  for (var i = 0; i < markersArrayLength; i++) {
  	var marker = markersArray[i];
  	console.log("LatLng of restaurants marker #"+ i + ":" + marker.lat + " | " + marker.lng);

  	var latlng = L.latLng(parseFloat(marker.lat),parseFloat(marker.lng));

	L.marker(latlng, {icon:foodIcon}).bindPopup(marker.htmlStr).addTo(map);
  };


  markersArray = Markers.find({
  	category: "consumer"
  }).fetch();

  markersArrayLength = markersArray.length; 
  
  for (var i = 0; i < markersArrayLength; i++) {
  	var marker = markersArray[i];
  	console.log("LatLng of restaurants marker #"+ i + ":" + marker.lat + " | " + marker.lng);

  	var latlng = L.latLng(parseFloat(marker.lat),parseFloat(marker.lng));

	L.marker(latlng, {icon:consumerIcon}).bindPopup(marker.htmlStr).addTo(map);
  };

  markersArray = Markers.find({
  	category: "sports"
  }).fetch();

  markersArrayLength = markersArray.length; 
  
  for (var i = 0; i < markersArrayLength; i++) {
  	var marker = markersArray[i];
  	console.log("LatLng of restaurants marker #"+ i + ":" + marker.lat + " | " + marker.lng);

  	var latlng = L.latLng(parseFloat(marker.lat),parseFloat(marker.lng));

	L.marker(latlng, {icon:sportsIcon}).bindPopup(marker.htmlStr).addTo(map);
  };

  markersArray = Markers.find({
  	category: "enrichment"
  }).fetch();

  markersArrayLength = markersArray.length; 
  
  for (var i = 0; i < markersArrayLength; i++) {
  	var marker = markersArray[i];
  	console.log("LatLng of restaurants marker #"+ i + ":" + marker.lat + " | " + marker.lng);

  	var latlng = L.latLng(parseFloat(marker.lat),parseFloat(marker.lng));

	L.marker(latlng, {icon:enrichment}).bindPopup(marker.htmlStr).addTo(map);
  };

  */

  map.setView([31.782,35.21933], 16);


  /*
  map.on('dblclick', function(event) {
    Markers.insert({latlng: event.latlng});
  });

  */
};



