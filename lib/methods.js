Meteor.methods({
  newMessage: function (message) {
    if (! this.userId) {
      throw new Meteor.Error('not-logged-in',
        'Must be logged in to send message.');
    }

    check(message, Match.OneOf(
      {
        text: String,
        type: String      
      },
      {
        picture: String,
        type: String
      }
    ));

    message.timestamp = new Date();
    message.userId = this.userId;

    var messageId = Messages.insert(message);

    return messageId;
  },
  updateName: function (name) {
    if (! this.userId) {
      throw new Meteor.Error('not-logged-in',
        'Must be logged in to update his name.');
    }

    check(name, String);
    if (name.length === 0) {
      throw Meteor.Error('name-required', 'Must proive user name');
    }

    return Meteor.users.update(this.userId, { $set: { 'profile.name': name } });
  },
  newReply: function (reply) {
    if (! this.userId) {
      throw new Meteor.Error('not-logged-in',
        'Must be logged in to send message.');
    }
        
    check(reply, Match.OneOf(
      {
        text: String,
        type: String,
        messageId: String      
      },
      {
        picture: String,
        type: String,
        messageId: String
      }
    ));

    reply.timestamp = new Date();
    reply.userId = this.userId;

    var replyId = Replies.insert(reply);

    return replyId;
  },  
  // removeChat: function (chatId) {
  //   if (! this.userId) {
  //     throw new Meteor.Error('not-logged-in',
  //       'Must be logged to create a chat.');
  //   }

  //   check(chatId, String);

  //   var chat = Chats.findOne(chatId);
  //   if (! chat || ! _.include(chat.userIds, this.userId)) {
  //     throw new Meteor.Error('chat-not-exists',
  //       'Chat not exists');
  //   }

  //   Messages.remove({ chatId: chatId });

  //   return Chats.remove({ _id: chatId });
  // },
  updatePicture: function (data) {
    if (! this.userId) {
      throw new Meteor.Error('not-logged-in',
        'Must be logged in to update his picture.');
    }

    check(data, String);

    return Meteor.users.update(this.userId, { $set: { 'profile.picture': data } });
  }

});