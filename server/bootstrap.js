Meteor.startup(function () {
 if (Chats.find().count() === 0 && 1==1) {
    Messages.remove({});
 
    var messages = [
      {
        text: 'Metro line 1 working fine',
        timestamp: moment().subtract(1, 'hours').toDate()
      },
      {
        text: 'Too crowded at line 2',
        timestamp: moment().subtract(2, 'hours').toDate()
      },
      {
        text: 'Someone should turn the air conditioning on at Doukisis Plakentias',
        timestamp: moment().subtract(1, 'days').toDate()
      },
      {
        text: 'Elevator our of order at Ellhniko',
        timestamp: moment().subtract(4, 'days').toDate()
      },
      {
        text: 'Three minutes delay at Thiseio',
        timestamp: moment().subtract(2, 'weeks').toDate()
      }
    ];
 
    messages.forEach(m => {
      Messages.insert(m);
    });
 
    var chats = [
      {
        name: 'Κώστας',
        picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
      },
      {
        name: 'Μαρία',
        picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg'
      },
      {
        name: 'Δημήτρης',
        picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg'
      },
      {
        name: 'Μάνος',
        picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg'
      },
      {
        name: 'Τάσος',
        picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg'
      }
    ];
 
    chats.forEach(chat => {
      let message = Messages.findOne({chatId: {$exists: false}});
      chat.lastMessage = message;
      let chatId = Chats.insert(chat);
      Messages.update(message._id, {$set: {chatId: chatId}})
    });
  }
});