angular
  .module('Buschat')
  .controller('NewGoodCtrl', NewGoodCtrl);

function NewGoodCtrl($scope, $state, $meteor) {
  //$scope.$meteorSubscribe('users').then(function () {
    //$scope.users = $scope.$meteorCollection(function () {
      //return Meteor.users.find({ _id: { $ne: Meteor.userId() } });
    //}, false);
  //});

  $scope.hideModal = hideModal;
  //$scope.newChat = newChat;

  /*$scope.data = {};
  $scope.sendMessage = sendMessage;
  $scope.inputUp = inputUp;
  $scope.inputDown = inputDown;
  $scope.closeKeyboard = closeKeyboard; */

  ////////////

  function hideModal() {
    $scope.modal.hide();
  }

  function time(){
    //aukshsh metrhth time kata 1
    time++;
    $scope.modal.hide();
  }

  function clean(){
    //aukshsh tou metrhth clean kata 1
    clean++;
    $scope.modal.hide();
  }

  function temperature(){
    //aukshsh tou metrhth temperature kata 1
    temperature++;
    $scope.modal.hide();
  }

  function driver(){
    //aukshsh tou metrhth driver kata 1
    driver++;
    $scope.modal.hide();
  }

  /*function newChat(userId) {
    // var chat = Chats.findOne({type: 'chat', userIds: {$all: [Meteor.userId(), userId]}});
    // if (chat) {
    //   return goToChat(chat._id);
    // }

    // $meteor.call('newChat', userId).then(goToChat);
  }

  function goToChat(chatId) {
    // hideModal();
    // return $state.go('tab.chat-detail', {chatId: chatId});
  }

  function sendMessage () {
    if (_.isEmpty($scope.data.message)) {
      return;
    }

    $meteor.call('newMessage', {
      text: $scope.data.message,
      type: 'text'      
    });

    delete $scope.data.message;
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

  function closeKeyboard () {
    // cordova.plugins.Keyboard.close();
  }*/
}