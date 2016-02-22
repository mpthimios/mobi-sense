angular
  .module('Buschat')
  .controller('RoutesCtrl', RoutesCtrl);
 
function RoutesCtrl ($scope, $meteor, $ionicScrollDelegate, $ionicModal) {
	//reactiveContext = $reactive(this).attach($scope);

	$meteor.subscribe('all-routes').then(function(){
		$scope.routes = $meteor.collection(function() {
            return Routes.find();
        });
		var delegate = $ionicScrollDelegate.$getByHandle('myScroll');
        delegate.resize();
	});		

	$scope.search = {text: ''};
	$scope.search_focus = false;

	$scope.$meteorAutorun(function(){
		var values = $scope.getReactively("search.text");		
		$scope.routes = $meteor.collection(function() {
            return Routes.find({$or: [{route_short_name: { '$regex' : '.*' + $scope.search.text }}, 
				{route_long_name: { '$regex' : '.*' + $scope.search.text }}]
			});
        });
        var delegate = $ionicScrollDelegate.$getByHandle('myScroll');
        delegate.resize();
	});

	$scope.toggle_search_focus = function(route_id){
		console.log("toggle");		
		console.log(route_id);
		if (route_id != undefined){
			selected_route = $meteor.collection(function() {
            	return Routes.find({route_id: route_id});
	        });
	        console.log(selected_route);
	        $scope.stops = selected_route[0].stops;
	        $scope.route = selected_route[0];
	        $ionicScrollDelegate.scrollTop();
		}
		$scope.search_focus = !$scope.search_focus;			
	}	

	$ionicModal.fromTemplateUrl('client/templates/new-good.html', {
	    scope: $scope
	  }).then(function (modal) {
	    $scope.modal1 = modal;
	  });

	 
	$ionicModal.fromTemplateUrl('client/templates/new-bad.html', {
	    scope: $scope
	  }).then(function (modal) {
	    $scope.modal2 = modal;
	  });

	 
	$ionicModal.fromTemplateUrl('client/templates/new-idea.html', {
	    scope: $scope
	  }).then(function (modal) {
	    $scope.modal3 = modal;
	  });

	
	  ////////////////
	  $scope.ShowModal1 = function (){
	        $scope.modal1.show();
	        var delegate = $ionicScrollDelegate.$getByHandle('myScroll');
        	delegate.resize();
	    }

	    $scope.ShowModal2= function (){
	         $scope.modal2.show()
	    }

	  $scope.ShowModal3= function (){
	         $scope.modal3.show()
	    }
	  

}
