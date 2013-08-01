Entries = new Meteor.Collection('entries');


Entries.allow({
	update: ownsDocument,
	remove: ownsDocument
});


  Meteor.methods({
  	entry: function(entryAttributes) {
  		var user = Meteor.user();

  		if (!user)
  		throw new Meteor.Error(401, "You need to login to post new stories");
  		
  		if (!entryAttributes.message)
  		throw new Meteor.Error(422, 'Please enter message');

  		var entry = _.extend(_.pick(entryAttributes, 'message'), {
	      userId: user._id, 
	      author: user.username, 
	      submitted: new Date().getTime()
  		});

  		var entryId = Entries.insert(entry);

  		return entryId;

  	}
  });

