 (function() {  
  // XXX: do these two really not want to set it to undefined (or null)?
  user_profile = function(id) {
    if(typeof id !== undefined){
      Session.set('selectedUserId', id);
    }
    return 'user_profile';
  };

    user_edit = function(id) {
    if(typeof id !== undefined){
      Session.set('selectedUserId', id);
    }
    return 'user_edit';
  };



Meteor.Router.add({
  '/': 'entryLog',
  '/entries/:_id' : {
  	to: 'entryPage',
  	and: function(id) { Session.set('currentEntryId', id); }
  },
  '/live': 'livePage',
  '/signup':'user_signup',
  '/signin':'user_signin',
  '/users':'users',
  '/users/:id': user_profile,
  '/users/:id/edit': user_edit,
  '/profile':user_edit,

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
Meteor.Router.filter('requireLogin', {only: ['entryLog', 'users']});

}());