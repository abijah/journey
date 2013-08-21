Meteor.Router.add({
  '/': 'journalLog',
  '/entries/:_id' : {
  	to: 'entryPage',
  	and: function(id) { Session.set('currentEntryId', id); }
  },
  '/live': 'livePage',
  '/signup':'user_signup'

});

Meteor.Router.filters({
  'requireLogin': function(page) {
    if (Meteor.user())
      return page;
     else if (Meteor.loggingIn())
      return 'loading';
    else
      return 'accessDenied';
  }
});
Meteor.Router.filter('requireLogin', {only: 'journalLog'});