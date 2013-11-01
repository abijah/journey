Template.userProfile.user = function(){
	if(userId=Session.get('selectedUserId')){
		return Meteor.users.findOne(userId);
	}
}
/*
Template.user_profile.avatarUrl = function(){
	return Gravatar.getGravatar(this, {
		d: 'http://telescope.herokuapp.com/img/default_avatar.png',
		s: 80
	});
}
*/
Template.userProfile.createdAtFormatted = Template.userItem.createdAtFormatted;

Template.userProfile.isCurrentUser = function(){
	return Meteor.user() && (Session.get('selectedUserId') === Meteor.user()._id);
}