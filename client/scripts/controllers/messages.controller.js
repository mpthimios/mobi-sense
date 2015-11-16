angular
  .module('Buschat')
  .controller('MessagesCtrl', MessagesCtrl);

function MessagesCtrl ($scope, $ionicModal) {  
  $scope.messages = $scope.$meteorCollection(Messages, false);
  $scope.userImg = userImg;

  $ionicModal.fromTemplateUrl('client/templates/new-message.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  $scope.$on('$destroy', function () {
    $scope.modal.remove();
  });

  $scope.openNewMessageModal = openNewMessageModal;
  
  ////////////

  function userImg (userId){    
    return Meteor.users.find({ _id: userId }).fetch()[0].services.twitter.profile_image_url;
  }

  function openNewMessageModal () {
    $scope.modal.show();
  }

}