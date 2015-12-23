angular
  .module('Buschat')
  .controller('RoutesCtrl', RoutesCtrl);
 
function RoutesCtrl ($scope, $meteor, $ionicScrollDelegate) {
	//reactiveContext = $reactive(this).attach($scope);

	$meteor.subscribe('all-routes').then(function(){
		$scope.routes = $meteor.collection(function() {
            return Routes.find();
        });        
	});		

	$scope.search = {text: 'Search'};
	$scope.search_focus = false;

	$scope.$meteorAutorun(function(){
		var values = $scope.getReactively("search.text");
		console.log("values",values);			
		$scope.routes = $meteor.collection(function() {
            return Routes.find({$or: [{route_short_name: { '$regex' : '.*' + $scope.search.text }}, 
				{route_long_name: { '$regex' : '.*' + $scope.search.text }}]
			});
        });		
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

}
