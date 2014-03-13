Template.userEdit.helpers({
  profileIncomplete : function() {
    return Meteor.user() && !this.loading && !userProfileComplete(this);
  },
  user : function(){
    var currentUser = Meteor.user();
    if(Session.get('selectedUserId') && !currentUser.loading && currentUser.isAdmin){
      currentUser = Meteor.users.findOne(Session.get('selectedUserId'));
    }
    return currentUser;
  },
  userEmail : function(){
    var currentUser = Meteor.user();
    if(Session.get('selectedUserId') && !currentUser.loading && currentUser.isAdmin){
      currentUser = Meteor.users.findOne(Session.get('selectedUserId'));
    }
    return getEmail(currentUser);
  }
})

Template.userEdit.events = {
  'submit form': function(e){
    e.preventDefault();
    if(!Meteor.user()) throwError('You must be logged in.');
    var $target=$(e.target);
    var user=Session.get('selectedUserId') ? Meteor.users.findOne(Session.get('selectedUserId')) : Meteor.user();
    
    var update = {
      "profile.name.firstname": $target.find('#firstname').val(),
      "profile.name.lastname": $target.find('#lastname').val(),
      "profile.bio": $target.find('#bio').val(),
      "profile.email": $target.find('#email').val()
    };
    
    // TODO: enable change email
   // var email = $target.find('[name=email]').val();
    var old_password = $target.find('[name=old_password]').val();
    var new_password = $target.find('[name=new_password]').val();

    // XXX we should do something if there is an error updating these things
    if(old_password && new_password){
   		Meteor.changePassword(old_password, new_password);
    }
    
    Meteor.users.update(user._id, {
      $set: update
    }/*, function(error){
      if(error){
        throwError(error.reason);
      } else {
       throwError('Profile updated');

      }
    }*/);
  }
  
};