Template.main.events({
    'click .top-back-button': function(){
        window.history.back();
    }
});

/*
Template.main.helpers(
  { 
    markers: function() {
      return Markers.find(); 
    }
  }
);
*/
Template.main.rendered = function() {
    console.log("main:rendered");

};
