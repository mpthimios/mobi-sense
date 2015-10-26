angular
  .module('Buschat')
  .controller('ChatsCtrl', ChatsCtrl);
 
function ChatsCtrl ($scope) {
  $scope.chats = $scope.$meteorCollection(Chats, false);
  $scope.remove = remove;
}

function remove (chat) {
	$scope.chats.splice($scope.chats.indexOf(chat), 1);
	$scope.chats.remove(chat);
}