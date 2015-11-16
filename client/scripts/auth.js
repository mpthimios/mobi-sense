angular
  .module('Buschat')
  .run(run);

function run($rootScope, $state) {
  
  Meteor.subscribe("userData");
  Meteor.subscribe("messages");
  Meteor.subscribe("users");

  Accounts.onLogin(function () {
    if ($state.is('login')) {
      $state.go('tab.messages');
    }
  });

  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === 'AUTH_REQUIRED') {
      $state.go('login');
    }
  });
}