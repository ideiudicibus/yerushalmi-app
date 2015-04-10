
Router.map(function(){
    this.route('main', {path: '/'} );
    this.route('businessesList', {path: '/list'})
    this.route('mapcontainer',{path: '/map'})
});


/*
Router.route('/', function () {
    this.render('main');
    //$('body').removeClass('know-tint');
    //$('body').removeClass('map');
});

Router.route('/list', function () {
    
	$('body').addClass('businessesList');
});

*/