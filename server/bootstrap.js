Meteor.startup(function () {
  Accounts.loginServiceConfiguration.remove({
      service : 'twitter'
    });

    Accounts.loginServiceConfiguration.insert({
      service     : 'twitter',
      consumerKey : 'wZnGpbYNA81BduNDk4hp98KDp',
      secret      : 'sM5uBya3s27S6U1vPfGb9jHv54BolRju5Dqn5AOfQ9ILW6YeMx'
    });

});