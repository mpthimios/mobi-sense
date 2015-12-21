angular
  .module('Buschat')
  .controller('NewGoodCtrl', NewGoodCtrl);

function NewGoodCtrl($scope, $state, $meteor) {

    $scope.$meteorSubscribe('users').then(function () {
    $scope.users = $scope.$meteorCollection(function () {
      return Meteor.users.find({ _id: { $ne: Meteor.userId() } });
    }, false);
  });

  $scope.timecnt=0;
  $scope.cleancnt=0;
  $scope.temperaturecnt=0;
  $scope.drivercnt=0;

  $scope.hideModal = hideModal;
  $scope.timee = timee;
  $scope.clean = clean;
  $scope.temperature = temperature;
  $scope.driver = driver;

  ////////////

  function hideModal() {
    $scope.modal1.hide();
  }

    function timee(inc){
    //aukshsh metrhth time kata 1
    $scope.timecnt += inc;
    $meteor.call('newMessage', {
      text: ' "Time" was upvoted by a user',
      type: 'text',
	classed: 'else'      
    });
    $scope.modal1.hide();
  }

  function clean(inc){
    //aukshsh tou metrhth clean kata 1
    $scope.cleancnt += inc;
    $meteor.call('newMessage', {
      text: ' "Clean" was upvoted by a user',
      type: 'text',
	classed: 'else'      
    });
    $scope.modal1.hide();
    console.log($scope.cleancnt);
  }

  function temperature(inc){
    //aukshsh tou metrhth temperature kata 1
    $scope.temperaturecnt += inc;
    $meteor.call('newMessage', {
      text: ' "Temperature" was upvoted by a user',
      type: 'text',
	classed: 'else'      
    });

    $scope.modal1.hide();
  }

  function driver(inc){
    //aukshsh tou metrhth driver kata 1
    $scope.drivercnt += inc;
    $meteor.call('newMessage', {
      text: ' "Driver" was upvoted by a user',
      type: 'text',
	classed: 'else'      
    });
    $scope.modal1.hide();
  }

}
