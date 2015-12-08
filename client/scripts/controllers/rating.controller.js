angular
  .module('Buschat')
  .controller('RatingCtrl', RatingCtrl);

 function RatingCtrl ($scope, $ionicModal) {  
  //$scope.messages = $scope.$meteorCollection(Messages, false);
  //$scope.userImg = userImg;

  $ionicModal.fromTemplateUrl('client/templates/new-good.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  $scope.$on('$destroy', function () {
    $scope.modal.remove();
  });

  $scope.openNewMessageModal = openNewMessageModal;
  
  ////////////

  function openNewMessageModal () {
    $scope.modal.show();
  }

}
