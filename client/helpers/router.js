 (function() {  
  // XXX: do these two really not want to set it to undefined (or null)?
  userProfile = function(id) {
    if(typeof id !== undefined){
      Session.set('selectedUserId', id);
    }
    return 'userProfile';
  };

    userEdit = function(id) {
    if(typeof id !== undefined){
      Session.set('selectedUserId', id);
    }
    return 'userEdit';
  };


Meteor.Router.add({
  '/': 'entryLog',
  '/entries/:_id' : {
  	to: 'entryPage',
  	and: function(id) { Session.set('currentEntryId', id); }
  },
  '/live': 'livePage',
  '/donate':'donatePage',
  '/signup':'userSignup',
  '/signin':'userSignin',
  '/users':'users',
  '/forgot_password':'userPassword',
  '/users/:id': userProfile,
  '/users/:id/edit': userEdit,
  '/profile':userEdit,
  '/admin/dash': 'adminDash',

});

Meteor.Router.filters({
  'requireLogin': function(page) {
    if (Meteor.user() && hasAccess(Meteor.user()))
      return page;
     else if (Meteor.loggingIn())
      return 'loading';
    else
//      return 'accessDenied';
      return 'landingPage';
  },
  'clearSeenErrors': function(page){
    clearSeenErrors();
    return page;
  },
  'isAdmin': function(page) {
  return isAdmin(Meteor.user()) ? page : "no_rights";
    }


});

Meteor.Router.filter('requireLogin', {only: ['entryLog', 'livePage', 'entryPage']});
Meteor.Router.filter('isAdmin', {only: ['users', 'adminDash']});
Meteor.Router.filter('clearSeenErrors');
}());