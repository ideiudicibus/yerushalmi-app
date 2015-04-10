Template.businessesList.helpers(
{ 
    businesses: function() {
      console.log("got into businessesList template");
      return Markers.find(); 
    }
  }
);