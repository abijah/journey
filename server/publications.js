Meteor.publish('entries', function() {
  return Entries.find();
});
Meteor.publish('comments', function(entryId) {
  return Comments.find({entryId: entryId});
});
Meteor.publish('testimonies', function(entryId) {
  return Testimonies.find({entryId: entryId});
});

Meteor.publish('settings', function() {
  return Settings.find();
});

// Users

Meteor.publish('currentUser', function() {
  return Meteor.users.find(this.userId);
});

Meteor.publish('allUsers', function() {
  if (this.userId && isAdminById(this.userId)) {
    // if user is admin, publish all fields
    return Meteor.users.find();
  }else{
    // else, filter out sensitive info
    return Meteor.users.find({}, {fields: {
      secret_id: false,
      isAdmin: false,
      emails: false,
      notifications: false,
      'profile.email': false
    }});
  }
});