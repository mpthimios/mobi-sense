angular
  .module('Buschat', [
    'angular-meteor',
    'ionic',
    'angularMoment',
    'accounts.ui'
  ]);

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
}
else {
  angular.element(document).ready(onReady);
}

function onReady() {
  angular.bootstrap(document, ['Buschat']);  
}