angular
  .module('Buschat')
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/templates/tabs.html',
      resolve: {
        user: ['$meteor', function ($meteor) {
          return $meteor.requireUser();
        }]
      }
    })
    .state('tab.messages', {
      url: '/messages',
      views: {
        'tab-messages': {
          templateUrl: 'client/templates/messages.html',
          controller: 'MessagesCtrl'
        }
      }
    })
    .state('tab.replies', {
      url: '/replies/:messageId',
      views: {
        'tab-messages': {
          templateUrl: 'client/templates/replies.html',
          controller: 'RepliesCtrl'
        }
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'client/templates/login.html',
      controller: 'LoginCtrl'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'client/templates/profile.html',
      controller: 'ProfileCtrl',
      resolve: {
        user: ['$meteor', function ($meteor) {
          return $meteor.requireUser();
        }]
      }
    })
    .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'client/templates/settings.html',
          controller: 'SettingsCtrl'
        }
      }
    })
    .state('tab.routes', {
      url: '/routes',
      views: {
        'tab-routes': {
          templateUrl: 'client/templates/routes.html',
          controller: 'RoutesCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/messages');
}