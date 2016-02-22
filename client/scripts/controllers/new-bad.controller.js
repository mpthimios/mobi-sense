angular
  .module('Buschat')
  .controller('NewBadCtrl', NewBadCtrl);

function NewBadCtrl($scope, $state, $meteor) {

    $scope.$meteorSubscribe('users').then(function () {
    $scope.users = $scope.$meteorCollection(function () {
      return Meteor.users.find({ _id: { $ne: Meteor.userId() } });
    }, false);
  });

$scope.hideModal = hideModal;
$scope.data = {};
$scope.sendMessage = sendMessage;

function hideModal() {
    $scope.modal2.hide();
  }


 function sendMessage() {
   // if (_.isEmpty($scope.data.line)) {
     // return;
    //}
    console.log('prin meteor call');

    $meteor.call('newActivity', {
      text: 'Για τη γραμμή ' + $scope.data.line + ' του ' + $scope.data.mean + 'υ αναφέρθηκε ότι  ' + $scope.data.field +'. Η βαθμολογία που έλαβε είναι: ' + $scope.data.rating ,
      type: 'text',
  classed: 'bad'     
    });
    console.log('new activity added');

    delete $scope.data.mean;
    //delete $scope.data.field;
    delete $scope.data.line;  
    $scope.modal2.hide();
  }

  function inputUp () {
    console.log("input up");
    if (isIOS) {
      $scope.data.keyboardHeight = 216;      
    }

    $timeout(function() {
      $ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom(true);
    }, 300);
  }


   function inputDown () {
    console.log("input down");
    if (isIOS) {
      $scope.data.keyboardHeight = 0;
    }

    $ionicScrollDelegate.$getByHandle('chatScroll').resize();
  }
}
