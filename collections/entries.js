Entries = new Meteor.Collection('entries');


Entries.allow({
	update: canEditById,
	remove: ownsDocument
});


  Meteor.methods({
  	entry: function(entryAttributes) {
  		var user = Meteor.user();
      var firstname = user.profile.name.firstname;
     
     	if (!user)
  		throw new Meteor.Error(401, "You need to login to post new stories");
  		
  		if (!entryAttributes.message)
  		throw new Meteor.Error(422, 'Please enter message');


  		var entry = _.extend(_.pick(entryAttributes, 'message', 'status', 'privacy'), {
	      userId: user._id, 
	      author: firstname, 
	      submitted: new Date().getTime(),
        commentsCount: 0
  		});

  		var entryId = Entries.insert(entry);

  		return entryId;

  	}
  });

