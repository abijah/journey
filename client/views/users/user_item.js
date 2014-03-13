Template.userItem.rendered = function(){
};

Template.userItem.helpers({
/*	avatarUrl: function(){
		return getAvatarUrl(this);
	},
*/	
	createdAtFormatted: function(){
		return this.createdAt ? moment(this.createdAt).fromNow() : '–';
	},
	displayName: function(){
		return getDisplayName(this);
	},
	email: function(){
		return getEmail(this);
	},
	entries: function(){
		return Entries.find({'userId':this._id});
	},
	entriesCount: function(){
		return Entries.find({'userId':this._id}).count();
	},
	comments: function(){
		return Comments.find({'userId':this._id});
	},
	commentsCount: function(){
		// Posts.find({'user_id':this._id}).forEach(function(post){console.log(post.headline);});
		return Comments.find({'userId':this._id}).count();
	},
	userIsAdmin: function(){
		return isAdmin(this);
	}
});

Template.userItem.events({
	'click .enable-link': function(e, instance){
		e.preventDefault();
		Meteor.users.update(instance.data._id,{
			$set:{
				hasAccess: true
			}
		});
	},
	'click .disable-link': function(e, instance){
		e.preventDefault();
		Meteor.users.update(instance.data._id,{
			$set:{
				hasAccess: false
			}
		});
	},
	'click .admin-link': function(e, instance){
		e.preventDefault();
		Meteor.users.update(instance.data._id,{
			$set:{
				isAdmin: true
			}
		});
	},
	'click .unadmin-link': function(e, instance){
		e.preventDefault();
		Meteor.users.update(instance.data._id,{
			$set:{
				isAdmin: false
			}
		});
	},
	'click .delete-link': function(e, instance){
		e.preventDefault();
		if(confirm("Are you sure you want to delete "+getDisplayName(instance.data)+"?"))
			Meteor.users.remove(instance.data._id);
			//delete user's tesimonies, comments, etc.
			//Entries.remove({userId: user._id});
			//Testimonies.remove({userId: user._id});
	}
})