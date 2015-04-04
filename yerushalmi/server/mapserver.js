var Markers = new Meteor.Collection('markers');

var data = Assets.getText('jerusalem_businesses_geocoded.csv');

var parsed = Baby.parse(data);

var lines = parsed.data;


if(Meteor.isServer){
  Markers.remove({});
}

//console.log(lines[0]);
console.log(lines[1]);

var len = lines.length;


for (var i=0; i<len; i++){
	
	line = lines[i];
	//console.log(line);
	//popupString = "";
	//for(var item in line) {
    //	popupString+=item + ' \n';
      
    
    var str = createPopUpStr(line);
    
    var marker = {
    	lat : parseFloat(line[5]),
    	lng : parseFloat(line[4]),
    	category : line[6],
    	htmlStr : str
    };

    //console.log(marker);

    Markers.insert(marker);
    	
	
    //L.marker(latlng).bindPopup(str).addTo(map);;
    //console.log(result[4],result[5])
    //var latlng = L.latLng(parseFloat(result[4]),parseFloat(result[5]));
    //L.marker(latlng).bindPopup(popupString);

}

/*
Papa.parse("business_with_addresses.csv", {
			header: false,
			download: true,
			complete: function(results) {

				//console.log(results);

				var len = results.data.length;
				for (var i=0; i<len; i++){
					console.log(results.data[i]);
					line = results.data[i];
					//console.log(line);
					//popupString = "";
					//for(var item in line) {
			        //	popupString+=item + ' \n';
			          
			        
			        var str = createPopUpStr(results.data[i]);
			        
			        var marker = {
			        	lat : parseFloat(line[5]),
			        	lng : parseFloat(line[4]),
			        	htmlStr : str
			        };



			        post._id = Markers.insert(marker);
			        	
					
			        //L.marker(latlng).bindPopup(str).addTo(map);;
			        //console.log(result[4],result[5])
			        //var latlng = L.latLng(parseFloat(result[4]),parseFloat(result[5]));
			        //L.marker(latlng).bindPopup(popupString);
				}
			}
}); 
*/

function createPopUpStr(arr) {
	str = "<div class=\"marker\">"
	str += "<b>" + arr[1] + "</b><br/>";
	str += arr[0] + "<br/>";
	str += "<a href=\"tel:"+arr[2]+"\">"+arr[2]+"</a><br/>";
	if (arr[3]!="") {
		str += "<a href=\"http://"+arr[3]+"\" target=\"_blank\">"+arr[3]+"</a><br/>";
	}
	str += arr[7] + "<br/>" + arr[8] + "<br/>";
	str += "</div>";
	return str;	
};



Meteor.publish('markers', function () {
  return Markers.find();
});