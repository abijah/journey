Accounts.onCreateUser(function(options, user){
  var userProperties = {
    profile: options.profile || {},
    hasAccess: false,
    isInvited: false,
    isAdmin: false
  }
  user = _.extend(user, userProperties);
  
  if (options.email)
    user.profile.email = options.email;
  
  // if first user, make admin
  if (!Meteor.users.find().count())     
    user.isAdmin = true;
    user.hasAccess = true;

  return user;
});

/*
Meteor.methods({
  changeEmail: function(newEmail) {
    Meteor.users.update(Meteor.userId(), {$set: {emails: [{address: newEmail}]}});
  },
  numberOfPostsToday: function(){
    console.log(numberOfItemsInPast24Hours(Meteor.user(), Posts));
  },
  numberOfCommentsToday: function(){
    console.log(numberOfItemsInPast24Hours(Meteor.user(), Comments));
  },
  testEmail: function(){
    Email.send({from: 'test@test.com', to: getEmail(Meteor.user()), subject: 'Telescope email test', text: 'lorem ipsum dolor sit amet.'});
  },
  testBuffer: function(){
    // TODO
  },
  generateEmailHash: function(){
    var email_hash = CryptoJS.MD5(getEmail(Meteor.user()).trim().toLowerCase()).toString();
    Meteor.users.update(Meteor.userId(), {$set : {email_hash : email_hash}});
  }
});
*/