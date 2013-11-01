Meteor.subscribe('entries');
Deps.autorun(function() {
  Meteor.subscribe('comments', Session.get('currentEntryId'));
  Meteor.subscribe('testimonies', Session.get('currentEntryId'));

});

// Users
Meteor.subscribe('currentUser');
Meteor.subscribe('allUsers');
Meteor.subscribe('settings');

