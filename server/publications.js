Meteor.publish('userData', function () {
  return Meteor.users.find({_id: this.userId}, { fields: { profile: 1, 'services.twitter': 1 } });
});

Meteor.publishComposite('replies', function () {
  if (! this.userId) {
    return;
  }

  return {
    find: function () {
      return Replies.find();
    }    
  }
});

Meteor.publishComposite('messages', function () {
  return {
    find: function () {
      return Messages.find();
    },
    children: [
      {
        find: function (message) {
          var query = { _id: message.userId };
          var options = { fields: { 'services.twitter.profile_image_url': 1 } };
          return Meteor.users.find(query, options);
        }
      }
    ]
  }
});