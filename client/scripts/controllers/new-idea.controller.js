angular
  .module('Buschat')
  .controller('NewIdeaCtrl', NewIdeaCtrl);

function NewIdeaCtrl($scope, $state, $meteor) {
  $scope.$meteorSubscribe('users').then(function () {
    $scope.users = $scope.$meteorCollection(function () {
      return Meteor.users.find({ _id: { $ne: Meteor.userId() } });
    }, false);
  });

  $scope.hideModal = hideModal;
  $scope.newChat = newChat;

  $scope.data = {};
  $scope.sendMessage = sendMessage;
  $scope.inputUp = inputUp;
  $scope.inputDown = inputDown;
  $scope.closeKeyboard = closeKeyboard;

  ////////////

  function hideModal() {
    $scope.modal3.hide();
  }
  function newChat(userId) {
    // var chat = Chats.findOne({type: 'chat', userIds: {$all: [Meteor.userId(), userId]}});
//     if (chat) {
  //     return goToChat(chat._id);
   //  }

     //$meteor.call('newChat', userId).then(goToChat);
  }

  function goToChat(chatId) {
     //hideModal();
     //return $state.go('tab.chat-detail', {chatId: chatId});
  }

  function sendMessage () {
    if (_.isEmpty($scope.data.idea)) {
      return;
    }

    $meteor.call('newIdea', {
      text: 'Για τo μέσο ' + $scope.data.mean + ' προτάθηκε να ' + $scope.data.idea ,
      type: 'text',
	    
    });

    $scope.modal3.hide();
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
  }
}

