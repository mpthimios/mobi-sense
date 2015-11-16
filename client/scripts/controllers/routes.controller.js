angular
  .module('Buschat')
  .controller('RoutesCtrl', RoutesCtrl);
 
function RoutesCtrl ($scope) {
	stopNames = ["Ομόνοια", "Μοναστηράκι", "Θησείο", "Κεραμικός"];

	var stopsContainer = angular.element("#stopsContainer");
	angular.forEach(stopNames, function(index){
		console.log(index);

		// var li = angular.element("<li></li>"); 

		// var relative = angular.element("<div></div>"); 
		// relative.addClass("relative");
		// var newStop = angular.element("<span></span>");
		// newStop.addClass("stop");
		// newStop.append(index);
		// var normalStopDot = angular.element("<span></span>");
		// normalStopDot.addClass("normalStopDot");		
		// relative.append(newStop);
		// relative.append(normalStopDot);

		// li.append(relative);
		// stopsContainer.append(li);
	});
}
